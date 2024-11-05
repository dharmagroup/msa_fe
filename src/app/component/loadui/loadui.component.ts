import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loadui',
  templateUrl: './loadui.component.html',
  styleUrl: './loadui.component.css'
})
export class LoaduiComponent implements OnInit {
  constructor(private load: LoadingService){}
  loadSubject : {show: boolean, message: string} | null = null;

  ngOnInit(): void {
    this.load.load$.subscribe(load => {
      this.loadSubject = load;
    });
  }
}
