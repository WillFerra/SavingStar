import { NgFor } from '@angular/common';
import { Injectable, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  barChart: any[] = [];
  pieChart: any[] = [];
  pieChartCat = ['Utilities', 'Rent', 'Gas', 'Cellphone', 'Internet', 'Housing', 'Subscriptions', 'Gym', 'Clothing', 'Transportation', 'Entertainment', 'Healthcare', 'Gifts', 'Pets', 'Insurance', 'Food', 'Car Expenses', 'Miscellaneous']
  

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
      data : [10,7,3,0,0,0,0,0,5,0,0,0,0,0,0,0,0,8],
      fill : 'origin'
    },
  ]
}

  getTotalData() {
    // Using the reduce function to sum up all the numbers in the array
    const total = this.pieChart[0].data.reduce((acc: any, num: any) => acc + num, 0);
    return total;
  }

  chartBarData(){
    return this.barChart;
  }

  chartPieData(){
    return this.pieChart;
  }

  newBarChart(pos:number, value:number){

  }

  // updating the pie chart
  newPieChart(amount:number, category:number){
    console.log(category);
    console.log("Before:", this.pieChart[0].data[category]);
    
    amount = Number(amount);
    this.pieChart[0].data[category] += amount;

    console.log("After:", this.pieChart[0].data[category]);

    if (this.chart) {
      this.chart.update();
    }
  }
}
