import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  alert: { type: string,title: string, message: string } | null = null;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
      if (alert) {
        setTimeout(() => this.alert = null, 3000); // Auto hide after 5 seconds
      }
    });
  }

  closeAlert() {
    this.alert = null;
  }


}