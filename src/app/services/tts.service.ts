import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var responsiveVoice: any;

@Injectable({
  providedIn: 'root'
})
export class TtsService {

 
  private synth: SpeechSynthesis | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.synth = window.speechSynthesis;
    }
  }

  speak(text: string): void {
    if (this.synth) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Set bahasa Indonesia
      utterance.rate = 0.8;
      this.synth.speak(utterance);
    } else {
      console.error('SpeechSynthesis API tidak tersedia di browser ini.');
    }
  }

  speaking(text: string, callback : any, onError: any): void {
    if (responsiveVoice) {
      responsiveVoice.speak(text, "Indonesian Male", {
        rate: 0.8,
        pitch: 1, 
        volume: 1.0,
        onend: callback,
        onerror: onError
      });
    } else {
      console.error('ResponsiveVoice API tidak tersedia.');
    }
  }

  playText(text: string, lang: string = 'id') {
    if (isPlatformBrowser(this.platformId) && typeof Audio !== 'undefined') {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`;
      const audio = new Audio(url);
      audio.play();
    } else {
      console.error('Audio is not supported in this environment.');
    }
  }

 
}
