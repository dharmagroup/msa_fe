import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

@Component({
  selector: 'app-talent-resume',
  templateUrl: './talent-resume.component.html',
  styleUrl: './talent-resume.component.css'
})
export class TalentResumeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  genderComposition: Highcharts.Options;
  ageBandComposition: Highcharts.Options;
  LOSComposition: Highcharts.Options;
  GradePromotion: Highcharts.Options;
  HavMap: Highcharts.Options;
  PromotionLevelSpeed: Highcharts.Options;
  SalaryIncrease: Highcharts.Options;
  existingPosition: Highcharts.Options;
  positionProjection: Highcharts.Options;
  positionProjectionJourney: Highcharts.Options;
  currentGrade: Highcharts.Options;
  currentGradeProjection: Highcharts.Options;
  gradeProjectionJourney: Highcharts.Options;
  currentGradeLos: Highcharts.Options;
  gradePromotionDuration: Highcharts.Options;
  gradePromotionExe: Highcharts.Options;

  constructor() {
    this.genderComposition = {
      chart: {
        type: 'pie',
        height: '220',
        width: '220',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Gender Composition',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '8px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Gender Composition',
          data: [
            { name: 'Laki-laki', y: 60 },
            { name: 'Perempuan', y: 40 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.ageBandComposition = {
      chart: {
        type: 'pie',
        height: '240',
        width: '240',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },

      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Age Band Composition',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '8px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Age Band Composition',
          data: [
            { name: '<30', y: 190 },
            { name: '31-40', y: 143 },
            { name: '41-50', y: 117 },
            { name: '>50', y: 47 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.LOSComposition = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'LOS Composition',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '8px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'LOS Composition',
          data: [
            { name: '1-5 Th', y: 219 },
            { name: '6-10 Th', y: 104 },
            { name: '11-15 Th', y: 71 },
            { name: '16-20 Th', y: 47 },
            { name: '>20 Th', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.GradePromotion = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Grade Promotion',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '8px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Grade Promotion Category',
          data: [
            { name: 'Fast', y: 219 },
            { name: 'Hold', y: 104 },
            { name: 'Normal', y: 71 },
            { name: 'Invisible', y: 47 },
            { name: 'Slow', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };

    // start row first
    this.HavMap = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'HAV Maps',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '8px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
          layout: 'vertical',
          align: 'center',
          verticalAlign: 'bottom',
          itemMarginBottom: 5, // Margin between items
          scrollable: true,
        },
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 5, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Hav Maps',
          data: [
            { name: 'CP', y: 219, color: '#faf769' },
            { name: 'ECP', y: 104, color: '#ffc240' },
            { name: 'Potential', y: 71, color: '#61fa85' },
            { name: 'High Potential', y: 47, color: '#029624' },
            { name: 'Star', y: 68, color: '#1b95f2' },
            { name: 'Deadwood', y: 68, color: '#b31204' },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.PromotionLevelSpeed = {
      chart: {
        type: 'pie',
        height: '240',
        width: '240',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Grade Promotion Speed',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Promotion Level Speed',
          data: [
            { name: 'Fast', y: 219 },
            { name: 'Hold', y: 104 },
            { name: 'Normal', y: 71 },
            { name: 'Invisible', y: 47 },
            { name: 'Slow', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.SalaryIncrease = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Salary Increase',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Salary Increase',
          data: [
            { name: 'Special Increase', y: 219 },
            { name: 'Normal Increase', y: 104 },
            { name: 'Low Increase', y: 71 },
            { name: 'High Increase', y: 47 },
            { name: 'Slow', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.existingPosition = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Current Position',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Existing Position',
          data: [
            { name: 'BOD', y: 7 },
            { name: 'Dept Head', y: 104 },
            { name: 'Dep. Division Head', y: 71 },
            { name: 'Sect. Head', y: 47 },
            { name: 'Group Head', y: 68 },
            { name: 'Unit Head', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.positionProjection = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Position Projection',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Position Projection',
          data: [
            { name: 'BOD', y: 7 },
            { name: 'Dept Head', y: 104 },
            { name: 'Dep. Division Head', y: 71 },
            { name: 'Sect. Head', y: 47 },
            { name: 'Group Head', y: 68 },
            { name: 'Unit Head', y: 68 },

          ],
        },
      ] as SeriesOptionsType[],
    };
    this.positionProjectionJourney = {
      chart: {
        type: 'pie',
        height: '255',
        width: '255',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Position Projection Journey',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Position Projection Journey',
          data: [
            { name: '1 More Step', y: 7 },
            { name: '2 Steps left', y: 104 },
            { name: '3 Steps Left', y: 71 },
            { name: '4 Steps Left', y: 47 },
            { name: 'Achieve', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.currentGrade = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Current Grade',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Current Grade',
          data: [
            { name: '3A', y: 7 },
            { name: '3B', y: 104 },
            { name: '3C', y: 71 },
            { name: '3D', y: 47 },
            { name: '3E', y: 68 },
            { name: '3F', y: 68 },
            { name: '4A', y: 68 },
            { name: '4B', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.currentGradeProjection = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Grade Projection',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Grade Projection',
          data: [
            { name: '3A', y: 7 },
            { name: '3B', y: 104 },
            { name: '3C', y: 71 },
            { name: '3D', y: 47 },
            { name: '3E', y: 68 },
            { name: '3F', y: 68 },
            { name: '4A', y: 68 },
            { name: '4B', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.gradeProjectionJourney = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      title: {
        text: 'Grade Projection Journey',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Grade Projection Journey',
          data: [
            { name: '3A', y: 7 },
            { name: '3B', y: 104 },
            { name: '3C', y: 71 },
            { name: '3D', y: 47 },
            { name: '3E', y: 68 },
            { name: '3F', y: 68 },
            { name: '4A', y: 68 },
            { name: '4B', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.currentGradeLos = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Current Grade LOS',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Current Grade LOS',
          data: [
            { name: '0', y: 7 },
            { name: '0.2', y: 104 },
            { name: '0.3', y: 71 },
            { name: '0.4', y: 47 },
            { name: '0.5', y: 68 },
            { name: '0.6', y: 68 },
            { name: '0.7', y: 68 },
            { name: '0.8', y: 68 },
            { name: '1.7', y: 68 },
            { name: '1.8', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.gradePromotionDuration = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Grade Promotion Duration',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Grade Promotion Duration',
          data: [
            { name: '0', y: 7 },
            { name: '0.1', y: 104 },
            { name: '0.2', y: 71 },
            { name: '0.3', y: 47 },
            { name: '0.4', y: 68 },
            { name: '0.5', y: 68 },
            { name: '0.6', y: 68 },
            { name: '0.8', y: 68 },
          ],
        },
      ] as SeriesOptionsType[],
    };
    this.gradePromotionExe = {
      chart: {
        type: 'pie',
        height: '250',
        width: '250',
        events: {
          click: this.onChartClick.bind(this)
        },
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false // Menonaktifkan tulisan "highcharts.com"
      },
      title: {
        text: 'Promotion Grade Exe.',
        style: {
          fontSize: '0.9rem', // Custom font size
          fontWeight: '400', // Custom font weight
          color: '#333333', // Custom color
        },
      },
      legend: {
        itemStyle: {
          fontSize: '7px', // Set the font size for legend labels
          color: '#333', // Optional: change the color
        },
        useHTML: true,
        labelFormatter: function () {
          return '<div class="scrollable-legend">' + this.name + '</div>';
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: this.onChartClick.bind(this)
            }
          }
        },
        pie: {
          innerSize: '45%', // Creates the donut effect
          depth: 45,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px', // Set a smaller font size for data labels
              color: '#666', // Custom color for the labels
            },
            distance: 4, // Adjust distance of label from the slice
            format: '{point.y} <br>({point.percentage:.1f}%)',
          },
          showInLegend: true
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Promotion Grade Exe.',
          data: [
            { name: 'Hold', y: 7 },
            { name: 'No Valid Data', y: 104 },
            { name: 'Process', y: 71 },
          ],
        },
      ] as SeriesOptionsType[],
    };
  }


  onChartClick(event: any): void {
    const point = event.point;
    if (point) {
      // Ubah status seleksi
      point.select(!point.selected);
      point.slice(!point.sliced);
      this.updateChart();
    }
    console.log(point)
  }

  updateChart(): void {
    // Untuk memperbarui chart setelah perubahan
    Highcharts.charts[0].redraw();
  }

}

