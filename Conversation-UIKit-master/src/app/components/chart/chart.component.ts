import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('myChart') myChart: ElementRef;
  lineChartData: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7], label: 'Emails', lineTension: 0 },
  ];

  lineChartData1: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 4, 2, 1], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 4.5, 2, 6], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 4, 8, 2], label: 'Emails', lineTension: 0 },
  ];

  lineChartData2: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 4, 2, 1, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 4.5, 2, 6, 2, 5, 4.5, 2, 3.5, 3, 1, 2], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 4, 8, 2, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5], label: 'Emails', lineTension: 0 },
  ];

  lineChartFilterData: ChartDataSets[];

  lineChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  lineChartLabels1: Label[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  lineChartLabels2: Label[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  lineChartDisplayLabels: Label[];

  lineChartOptions = {
      responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  display: true,
              }
          }],

      }

  };

  lineChartColors: Color[] = [
      {
          borderColor: '#acaef9',
          pointBorderColor: '#acaef9',
          pointBackgroundColor: "#FFFFFF",
      },
      {
          borderColor: '#5acdfc',
          pointBorderColor: '#5acdfc',
          pointBackgroundColor: "#FFFFFF",
      },
      {
          borderColor: '#f2a6ce',
          pointBorderColor: '#f2a6ce',
          pointBackgroundColor: "#FFFFFF",
      }
  ];

  lineChartFilterColors: Color[];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit(): void {
    this.lineChartFilterData = this.lineChartData;
    this.lineChartFilterColors = this.lineChartColors;
    this.lineChartDisplayLabels = this.lineChartLabels;
  }

  ngAfterViewInit(): void {
    const chatsgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    chatsgradient.addColorStop(0, '#acaef9');
    chatsgradient.addColorStop(1, 'rgba(255,255,255,0)');

    const callsgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    callsgradient.addColorStop(0, '#5acdfc');
    callsgradient.addColorStop(1, 'rgba(255,255,255,0)');

    const emailssgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    emailssgradient.addColorStop(0, '#f2a6ce');
    emailssgradient.addColorStop(1, 'rgba(255,255,255,0)');

    this.lineChartColors = [
        {
            backgroundColor: chatsgradient,
            borderColor: '#acaef9',
            pointBorderColor: '#acaef9',
            pointBackgroundColor: "#FFFFFF",
        },
        {
            backgroundColor: callsgradient,
            borderColor: '#5acdfc',
            pointBorderColor: '#5acdfc',
            pointBackgroundColor: "#FFFFFF",
        },
        {
            backgroundColor: emailssgradient,
            borderColor: '#f2a6ce',
            pointBorderColor: '#f2a6ce',
            pointBackgroundColor: "#FFFFFF",
        }
    ];
    this.lineChartFilterColors = this.lineChartColors;

  }

}
