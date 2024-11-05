import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../../../services/title.service';
import { Router } from '@angular/router';
import { TabService } from '../../../../../../services/tab.service';
import { ApiService } from '../../../../../../services/api.service';
import { ExportsService } from '../../../../../../services/exports.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
 
  selected: {start: Date, end: Date} | any = {}
  constructor(public title: TitleService, private api: ApiService, private tab: TabService, private exports: ExportsService){
    this.selected.start = Date.now()
    this.selected.end = Date.now()
  }

  ngOnInit(): void {
      this._load_reports('')
  }

  issues : any[] = [];
  record : any 
  load : boolean = false
  _load_reports(parameter: string){
    let start = new Date(this.selected.start).toLocaleDateString()
    let end = new Date(this.selected.end).toLocaleDateString()
    this.load = true
    this.api.post('manufacture/andon/reports'+parameter,{start_date: start, end_date: end})
    .subscribe((data : any) => {
      this.issues = data.data.data
      this.record = data.data
      this.load = false
    })
  }

  timer(start: string, end: string) {
    let startDate = new Date(start)
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let isEnded: boolean = false;

    let calculateTimeDifference = () => {
      const now = new Date();
      // Validasi input
      if (end) {
        isEnded = true; // Jika start atau end tidak ada, anggap periode berakhir
        let endDate = new Date(end)
        const diffInMs = endDate.getTime() - startDate.getTime();
        const totalSeconds = Math.floor(diffInMs / 1000);
        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;
      } 
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    return calculateTimeDifference()
  }

  chosenDate(event:any){
    this._load_reports('')
  }

  paginate(path:string){
    const parsedUrl = new URL(path);
    const pageParam = parsedUrl.searchParams.get('page');
    this._load_reports("?page="+pageParam)
  }

  search(event:any){
    if(event.keyCode === 13){
      let start = new Date(this.selected.start).toLocaleDateString()
      let end = new Date(this.selected.end).toLocaleDateString()
      this.load = true
      this.api.post('manufacture/andon/reports',{start_date: start, end_date: end, search: event.target.value})
      .subscribe((data : any) => {
        this.issues = data.data.data
        this.record = data.data
        this.load = false
      })
    }

  }

  loadBtn : boolean = false
  exportExcel(){
    let start = new Date(this.selected.start).toLocaleDateString()
    let end = new Date(this.selected.end).toLocaleDateString()
    this.loadBtn = true
    this.api.post('manufacture/andon/reports-excel',{start_date: start, end_date: end})
    .subscribe((data : any) => {
        this.exports.excel(data.data,'Andon-system')
        this.loadBtn = false
    },(error:any)=>{
      this.loadBtn = false
    })
  }

}
