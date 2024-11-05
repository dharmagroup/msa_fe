import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
import { ApiService } from '../../../../../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;

  pieChartPresent: Highcharts.Options;
  barChartPresent: Highcharts.Options;
  pieChartLate: Highcharts.Options;
  barChartLate: Highcharts.Options;

  constructor(private api: ApiService) {
    this._get_birthday()
    this.pieChartPresent = {
      chart: {
        type: 'pie',
        height: '283',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Hadir VS Tidak Hadir',
        style: {
          fontSize: '0.8em' // Mengatur ukuran font judul
        }
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: function () {
                alert(`Anda mengklik ${this.name}: ${this.y}`);
              }
            }
          }
        },
        pie: {
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.y}', // Menampilkan jumlah data
            style: {
              fontSize: '16px',
              fontWeight: 'bold'
            }
          },
          showInLegend: true // Untuk menampilkan label di bawah chart
        }
      },
      series: [{
        cursor: 'pointer', // Mengatur cursor menjadi pointer
        name: 'Kehadiran',
        type: 'pie',
        data: [
          { name: 'Hadir', y: 70 },
          { name: 'Tidak Hadir', y: 30 }
        ]
      }] as SeriesOptionsType[]
    };

    this.barChartPresent = {
      chart: {
        height: '283',
        type: 'column'
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          dataLabels: {
            enabled: true, // Mengaktifkan label data
            style: {
              fontSize: '0.8em', // Mengatur ukuran font label
              color: '#000' // Mengatur warna font label
            }
          },
          point: {
            events: {
              click: function () {
                alert(`Anda mengklik ${this.category}: ${this.y}`);
              }
            }
          }
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Kategori Ketidakhadiran',
        style: {
          fontSize: '0.8em' // Mengatur ukuran font judul
        }
      },
      xAxis: {
        categories: ['Sakit', 'Izin', 'Alfa', 'Cuti', 'Dinas']
      },
      yAxis: {
        enabled: false,
        title: {
          text: null,
          // text: 'Total Karyawan',
          style: {
            fontSize: '0.8em' // Mengatur ukuran font judul
          }
        },
        visible: false
      },
      series: [{
        cursor: 'pointer',
        name: 'Tidak Hadir',
        type: 'column', // Menentukan tipe di sini
        data: [5, 2, 3, 6, 4],
        showInLegend: false
      }] as SeriesOptionsType[] // Menambahkan tipe di sini
    };

    this.pieChartLate = {
      chart: {
        height: '283',
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Tepat Waktu VS Terlambat',
        style: {
          fontSize: '0.8em' // Mengatur ukuran font judul
        }
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: function () {
                alert(`Anda mengklik ${this.name}: ${this.y}`);
              }
            }
          }
        },
        pie: {
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.y}', // Menampilkan jumlah data
            style: {
              fontSize: '16px',
              fontWeight: 'bold'
            }
          },
          showInLegend: true // Untuk menampilkan label di bawah chart
        }
      },
      series: [{
        cursor: 'pointer',
        name: 'Kehadiran',
        type: 'pie',
        data: [
          { name: 'Tepat Waktu', y: 70 },
          { name: 'Terlambat', y: 30 }
        ]
      }] as SeriesOptionsType[] // Menambahkan tipe di sini
    };

    this.barChartLate = {
      chart: {
        height: '283',
        type: 'column'
      },
      title: {
        text: 'Kategori Keterlambatan',
        style: {
          fontSize: '0.8em' // Mengatur ukuran font judul
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          dataLabels: {
            enabled: true, // Mengaktifkan label data
            style: {
              fontSize: '0.8em', // Mengatur ukuran font label
              color: '#000' // Mengatur warna font label
            }
          },
          point: {
            events: {
              click: (event: any) => this.test(event)
            }
          }
        }
      },
      xAxis: {
        categories: ['LT1', 'LT2', 'LT3', 'LT4', 'LT5']
      },
      yAxis: {
        title: {
          text: null,
          // text: 'Total Karyawan',
        },
        visible: false
      },
      series: [{
        cursor: 'pointer',
        name: '',
        type: 'column', // Menentukan tipe di sini
        data: [5, 2, 3, 4, 10],
        showInLegend: false
      }] as SeriesOptionsType[] // Menambahkan tipe di sini
    };

  }

  selected: { start: Date, end: Date } | any = {}
  chosenDate(event: any) {

  }


  test(event: any) {
    console.log(event.point)
  }


  birthday: any[] = []
  _get_birthday() {
    this.api.request('https://d-hr.dharmap.com/api/v1/common/birthday').subscribe((response: any) => {
      this.birthday = response.data
    })
  }

}