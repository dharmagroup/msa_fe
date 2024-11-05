import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public api: ApiService, private userServices: UserService){
    this.user = this.userServices.getUser();
  }

  user: User | null;

  dropdowns: { [key: string]: boolean } = {
    bell: false,
    profile: false
  };

  toggleDropdown(type: string, event: MouseEvent) {
    // Close all other dropdowns
    for (let key in this.dropdowns) {
      if (key !== type) {
        this.dropdowns[key] = false;
      }
    }
    // Toggle the clicked dropdown
    this.dropdowns[type] = !this.dropdowns[type];
    event.stopPropagation(); // Prevents event from propagating to document
  }

  closeDropdown(type: string) {
    this.dropdowns[type] = false;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      // Close all dropdowns when clicking outside
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    }
  }

  @ViewChild('textInput') textInput!: ElementRef;
  @HostListener('document:keydown.control.slash', ['$event'])
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.ctrlKey && event.code === 'Slash') {
      event.preventDefault(); // Prevent default action if needed
      if (this.textInput) {
        this.textInput.nativeElement.focus();
      }
    }
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
}
