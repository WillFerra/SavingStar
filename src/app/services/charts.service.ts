import { Injectable, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  // @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  barChart: any[] = [];
  pieChart: any[] = [];
  

  constructor() {
    this.barChart = [
      {
        label: 'January',
        data : [150,20,130],
        fill : 'origin'
      },
      {
        label: 'February',
        data : [200,40,160],
        fill : 'origin'
      }
    ]
  

  this.pieChart = [
    {
      data : [10,7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      fill : 'origin'
    },
  ]
}

  chartBarData(){
    return this.barChart;
  }

  chartPieData(){
    return this.pieChart;
  }

  newBarChart(label:string, pos:number, value:number){

  }

  newPieChart(label:string, pos:number, amount:number, category:number){
    this.pieChart[0].data.push(amount)
  }
}
