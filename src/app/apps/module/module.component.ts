import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent {
  loading : boolean = true
  constructor(){
    setTimeout(() => {
      // Setelah data selesai dimuat
      this.loading = false;
    }, 3000);
  }
}
