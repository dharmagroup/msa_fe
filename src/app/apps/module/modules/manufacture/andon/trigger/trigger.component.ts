import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingService } from '../../../../../../services/loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../../../services/alert.service';
import { PusherService } from '../../../../../../services/pusher.service';
import { TitleService } from '../../../../../../services/title.service';
import { TabService } from '../../../../../../services/tab.service';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrl: './trigger.component.css'
})
export class TriggerComponent implements OnInit {
  constructor(private api: ApiService, private pusher: PusherService, private location: Location, private loading: LoadingService, private alert: AlertService,
    private title: TitleService, private tab: TabService    
  ) {
  
  }
  create:boolean = false
  ngOnInit(): void {
    this._get_layout_()
    this.pusher.bind('andonalarm', (data: any) => {
      if(!this.create){
        this._get_layout_without_loading()
      }
    });
   
    this.pusher.bind('andonstartrepair', (data: any) => {
        this._get_layout_without_loading()
    });
  }

  data: any[] = []
  station: any[] = []
  _get_layout_() {
    this.loading.show('Loading...')
    this.api.post('manufacture/andon/layout-trigger', {}).subscribe((data: any) => {
      this.data = data.andon
     
      this.station = data.station
      this.loading.hide()
      this.create = false
    },(error:any)=>{
      this.loading.hide()
      this.create = false
    })
  }

  _get_layout_without_loading() {
    this.api.post('manufacture/andon/layout-trigger', {}).subscribe((data: any) => {
      this.data = data.andon
      this.station = data.station
    },(error:any)=>{
    })
  }

  back() {
    this.location.back()
  }

  toggleFullscreen() {
    if (this.isFullscreen()) {
      this.exitFullscreen();
    } else {
      this.enterFullscreen();
    }
  }

  enterFullscreen() {
    const elem = document.documentElement; // atau elemen yang ingin dijadikan fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  isFullscreen() {
    return document.fullscreenElement != null;
  }

    isModalOpen = false; // Modal state
    item: any
    items: any
    openModal(item:any, items:any) {
      this.item = item
      this.items = items
      this.form = new FormGroup({
        andon_type: new FormControl(items.andon_type_id),
        andon_line: new FormControl(items.andon_line_name),
        andon_station: new FormControl(items.andon_station, Validators.required),
        status: new FormControl(items.status, Validators.required),
        reason: new FormControl(items.reason, Validators.required),
      })
      this.isModalOpen = true; // Open modal
    }

    closeModal() {
        this.isModalOpen = false; // Close modal
    }

    form : FormGroup = new FormGroup({
      andon_type: new FormControl(null),
      andon_line: new FormControl(null),
      andon_station: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      reason: new FormControl(null, Validators.required),
    })

    load : boolean = false
    submit(){
      if(this.form.valid){
        this.load = true
        this.create = true
        this.api.post('manufacture/andon/create',this.form.value)
        .subscribe((response:any)=>{
          this.load = false
          this.alert.showAlert('success','Successfully',response.message)
          this._get_layout_()
          this.closeModal()
        },(error:any)=>{
          this.load = false
          this.create = false
          this.alert.showAlert('danger','Error',error.error.message)
        })        
      }
      else{
        this.alert.showAlert('warning','Warning','Field cannot be empty')
      }
    }

    troubleShootIsOn : boolean = false
    startTroubleShoot(event:any){
      if(event.target.checked){
        this.troubleShootIsOn = true
        this.loading.show('Loading...')
        this.api.post('manufacture/andon/start-repair',{startmaking: true, andon_log_id: this.items.andon_log_id})
        .subscribe((response:any)=>{
          this.loading.hide()
        },(error:any)=>{
          this.loading.hide()
        })
      }
      else{
        this.troubleShootIsOn = false
        this.loading.show('Loading...')
        this.api.post('manufacture/andon/start-repair',{startmaking: false, andon_log_id: this.items.andon_log_id})
        .subscribe((response:any)=>{
          this.loading.hide()
        },(error:any)=>{
          this.loading.hide()
        })
      }
    }
}
