import { Component } from '@angular/core';
import { TitleService } from '../../../services/title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(private title: TitleService, private router: Router){
    this.title.setTitle("Pesan")
  }

  ngOnInit() {
 
  }
  chats = [
    { 
      name: 'John Doe',
      lastMessage: 'Hello!',
      messages: [
        { text: 'Hi there!', isUserMessage: false, isRead: true, time: new Date() },
        { text: 'How are you?', isUserMessage: true, isRead: false, time: new Date() },
        { text: 'I am good, thanks!', isUserMessage: false, isRead: false, time: new Date() }
      ]
    },
    {
      name: 'Jane Smith',
      lastMessage: 'Let\'s meet up!',
      messages: [
        { text: 'Sure, when?', isUserMessage: true, isRead: true, time: new Date() },
        { text: 'How about tomorrow?', isUserMessage: false, isRead: false, time: new Date() }
      ]
    }
  ];

  onlineUsers = [
    { name: 'John Doe' },
    { name: 'Jane Smith' }
  ];

  selectedChat: any;
  newMessage: string = '';

  selectChat(chat: any) {
    this.selectedChat = chat;
    // Simulate user typing status
    this.selectedChat.isTyping = false;
    setTimeout(() => {
      this.selectedChat.isTyping = true;
      setTimeout(() => {
        this.selectedChat.isTyping = false;
      }, 2000);
    }, 1000);
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedChat) {
      this.selectedChat.messages.push({
        text: this.newMessage,
        isUserMessage: true,
        isRead: false,
        time: new Date()
      });
      this.newMessage = ''; // Clear the input field
      this.selectedChat.lastMessage = this.newMessage; // Update last message
    }
  }
}
