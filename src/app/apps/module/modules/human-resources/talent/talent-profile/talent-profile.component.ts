import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

// Initialize the Solid Gauge module
HighchartsMore(Highcharts);
SolidGauge(Highcharts);
@Component({
  selector: 'app-talent-profile',
  templateUrl: './talent-profile.component.html',
  styleUrl: './talent-profile.component.css'
})
export class TalentProfileComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  matrix: Highcharts.Options;
  mandatory: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Grade Level Development'
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      yAxis: {
        title: {
          text: 'Grade Level'
        },
      },
      xAxis: {
        categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
      },
      series: [{
        name: 'Grade Level',
        data: [0, 0, 0, 0, 41, 41, 41, 41, 41, 42, 42, 0] // Contoh data
      }] as SeriesOptionsType[],
      tooltip: {
        shared: true,
        valueSuffix: ' Grade'
      }
    };

    this.mandatory = {
      chart: {
        type: 'solidgauge',
        height: '170',
        width: '170',
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      title: {
        text: 'Mandatory Training',
        style:{
          fontSize: '12px',
          fontWeight:'400',
        },
      },
      pane: {
        // center: ['50%', '50%'],
        // size: '65%',
        startAngle: -90,
        endAngle: 90,
        background: [{
          backgroundColor:'#ccc',
          borderRadius: 0,
          innerRadius: '65%',
          outerRadius: '95%',
          shape: 'arc'
        }]
      },
      yAxis: {
        min: 0.00,
        max: 1.00,
        title: {
          text: '',
        },
        stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353']  // red
        ],
        tickPosition: 'inside',
        lineWidth: 0,
        tickPositions: [0.00, 1.00], // Menambahkan posisi tick untuk 0 dan 1
        labels: {
          enabled: true, // Mengaktifkan label
          format: '{value}', // Format label
          distance: 10,
          style: {
            color: '#333', // Warna label
            textAlign: 'center'
          },
        },
      },
      series: [{
        name: 'Training',
        data: [0.75], // Contoh data, ganti sesuai dengan nilai yang diinginkan
        tooltip: {
          valueSuffix: ' Level'
        }
      }] as SeriesOptionsType[]
    };

    this.matrix = {
      chart: {
        type: 'solidgauge',
        height: '170',
        width: '170',
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      title: {
        text: 'Matrix Competency',
        style:{
          fontSize: '12px',
          fontWeight:'400',
        },
      },
      pane: {
        // center: ['50%', '50%'],
        // size: '65%',
        startAngle: -90,
        endAngle: 90,
        background: [{
          backgroundColor:'#ccc',
          borderRadius: 0,
          innerRadius: '65%',
          outerRadius: '95%',
          shape: 'arc'
        }]
      },
      yAxis: {
        min: 0.00,
        max: 1.00,
        title: {
          text: '',
        },
        stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353']  // red
        ],
        tickPosition: 'inside',
        lineWidth: 0,
        tickPositions: [0.00, 1.00], // Menambahkan posisi tick untuk 0 dan 1
        labels: {
          enabled: true, // Mengaktifkan label
          format: '{value}', // Format label
          distance: 10,
          style: {
            color: '#333', // Warna label
            textAlign: 'center'
          },
        },
      },
      series: [{
        name: 'Competency Level',
        data: [0.75], // Contoh data, ganti sesuai dengan nilai yang diinginkan
        tooltip: {
          valueSuffix: ' Level'
        }
      }] as SeriesOptionsType[]
    };
  }
}
