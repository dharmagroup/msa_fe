import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private pusher: Pusher;
  private channel: any;

  constructor() {
    // Initialize Pusher
    this.pusher = new Pusher('45651947dc7f127ec3e7', {
      cluster: 'ap1',
    });

    // Subscribe to the channel
    this.channel = this.pusher.subscribe('msa');
  }

  // Listen for messages
  public bind(event: string, callback: (data: any) => void) {
    this.channel.bind(event, callback);
  }
}
