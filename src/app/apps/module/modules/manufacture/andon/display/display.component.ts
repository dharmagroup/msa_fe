import { AfterViewInit, Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { Location } from '@angular/common';
import { LoadingService } from '../../../../../../services/loading.service';
import { PusherService } from '../../../../../../services/pusher.service';
import { interval, Subscription, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  audio: HTMLAudioElement | null = null;
  alarm: HTMLAudioElement | null = null;
  audioQueue: string[] = [];
  currentAudioIndex: number = 0;
  private intervalId: Subscription | null = null;
  private timerId: any;
  private timerId2: any;
  private isPlaying = false;
  data: any[] = [];
  issue: any[] = [];
  private subscription: Subscription;
  private subscription2: Subscription;
  constructor(
    private api: ApiService,
    private pusher: PusherService,
    private location: Location,
    private loading: LoadingService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._get_layout_();

    this.pusher.bind('andonvoice', this.handleAndonVoice.bind(this));
    this.pusher.bind('andonalarm', () => this._get_layout_without_loading());
    this.pusher.bind('andonstartrepair', () => {
      console.log("test");
      this._get_layout_without_loading()
      this.issue.forEach(issue => {
        this.updateRepairTime(issue.id)
      });
    });

    this.checkIssues();
  }

  ngOnDestroy() {
    this.cleanupAudio();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
 
    if (this.subscription) {
      this.subscription.unsubscribe(); // Clean up the timer when the component is destroyed
    }

    if (this.subscription2) {
      this.subscription2.unsubscribe(); // Clean up the timer when the component is destroyed
    }
  }

  handleAndonVoice(data: any) {
    console.log(data)
    let audioSrc: string = 'assets/' + data.a;
    if (!this.audioQueue.includes(audioSrc)) {
      this.audioQueue.push(audioSrc);
      if (this.audioQueue.length === 1) {
        this.playCurrentAudio();
      }
    }
  }

  isPositiveInteger(num: number | null): boolean {
    return num !== null && Number.isInteger(num) && num > 0;
  }

  checkIssues() {
    this.intervalId = interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      const now = new Date();
      this.issue.forEach(issue => {
        const createdAt = new Date(issue.created_at);
        const diffInMinutes = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60));
        const totalSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
        
        if (totalSeconds >= 120) {
          this.updateRepairTime(issue.id);
        }
  
        // Tambahkan properti untuk menyimpan status suara
        if (!issue.soundPlayed) {
          if (this.isPositiveInteger((diffInMinutes - 2) / 5)) {
            this.playSound();
            issue.soundPlayed = true; // Tandai bahwa suara sudah diputar
          }
        } else {
          // Reset status suara jika kondisi tidak lagi terpenuhi
          if (!this.isPositiveInteger((diffInMinutes - 2) / 5)) {
            issue.soundPlayed = false;
          }
        }
      });
    });
  }
  


  updateRepairTime(andonLogId: number) {
    // Find the item with the specified andon_log_id
    const itemToUpdate = this.data.flatMap(group => group.data)
      .find(item => item.andon_log_id === andonLogId);
    const itemToUpdate2 = this.issue.find(item => item.id === andonLogId);
    if (itemToUpdate) {
      const startTime = new Date(itemToUpdate.start).getTime();
      const updateInterval = 1000; // Update every second

      // Start the timer
      this.subscription = timer(0, updateInterval).subscribe(() => {
        const now = new Date().getTime() + 10000;
        const elapsedSeconds = Math.floor((now - startTime) / 1000);

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;

        // Update the repairTime in the format "jam:menit:detik"
        itemToUpdate.repairTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        itemToUpdate2.repairTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Optionally trigger change detection
        this.cdr.detectChanges();
      });
    }
  }

  playSound() {
    if (this.isPlaying) return;

    this.alarm = new Audio('assets/audio/alarm.mp3');
    this.alarm.volume = 0.7
    this.isPlaying = true;

    this.alarm.play().then(() => {
      this.alarm?.addEventListener('ended', () => {
        this.isPlaying = false;
      });
    }).catch((error) => {
      console.error('Error playing sound:', error);
      this.isPlaying = false;
    });
  }

  _get_layout_() {
    this.loading.show('Loading...');
    this.api.post('manufacture/andon/layout', {}).subscribe((data: any) => {
      this.data = data.andon;
      this.issue = data.issue;
      this.loading.hide();
    }, (error: any) => {
      this.loading.hide();
    });
  }

  _get_layout_without_loading() {
    this.api.post('manufacture/andon/layout', {}).subscribe((data: any) => {
      this.data = data.andon;
      this.issue = data.issue;
    }, (error: any) => { });
  }

  back() {
    this.location.back();
  }

  toggleFullscreen() {
    const elem = document.documentElement;
    if (this.isFullscreen()) {
      document.exitFullscreen();
    } else {
      elem.requestFullscreen();
    }
  }

  isFullscreen() {
    return document.fullscreenElement != null;
  }

  playAudio(): void {
    if (this.audioQueue.length > 0) {
      this.currentAudioIndex = 0;
      this.playCurrentAudio();
    }
  }

  playCurrentAudio(): void {
    if (this.audioQueue.length > 0) {
      let first = this.audioQueue[0];
      let introPath = first.split(/[-.]/);
      let intro = new Audio(introPath[0]+".mp3");
      intro.play().catch((error) => {
        console.error('Error playing audio:', error);
        this.audio = new Audio(this.audioQueue[0]);
        this.audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
  
        this.audio.addEventListener('ended', () => {
          this.audioQueue.shift();
          this.playCurrentAudio();
        }, { once: true });      
      });
      intro.addEventListener('ended', () => {
        this.audio = new Audio(this.audioQueue[0]);
        this.audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
  
        this.audio.addEventListener('ended', () => {
          this.audioQueue.shift();
          this.playCurrentAudio();
        }, { once: true });      
      }, { once: true });
    }
  }

  cleanupAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
    if (this.alarm) {
      this.alarm.pause();
      this.alarm.src = '';
      this.alarm = null;
    }
  }

  
}
