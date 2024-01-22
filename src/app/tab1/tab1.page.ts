import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartsService } from '../services/charts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page implements OnInit{

  allCategories : string[];
  allValues : any[] = [];
  pieValues : number[];
  setValues: any[] = [];

  fg = new FormGroup({
    amount: new FormControl(),
    pos: new FormControl(),
    label: new FormControl(),
    category: new FormControl(),
    date: new FormControl(),
  });

  @ViewChild(BaseChartDirective) bcd?: BaseChartDirective;

  public BarChartData: ChartConfiguration['data'] = {
    datasets : [],
    labels : []
  };
  
  public PieChartData: ChartConfiguration['data'] = {
    datasets : [{
      data : [],
      fill: 'origin'
    }],
    labels : []
  };

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  colorArray: any;

  ngOnInit() {
    this.allValues = this.PieChartData.datasets[0].data;
    
    this.allValues.forEach(element => {
      if(element>0){
        this.setValues.push(element);
      }
    });

    this.allValues.forEach((item,index) => {
      if ( item > 0 ) { 
        let valcat = {
          cat : this.allCategories[index],
          val : item
        };
        this.setValues.push(valcat);
      }
    });
  }

  constructor(private chartData:ChartsService) {
    this.BarChartData.datasets = this.chartData.chartBarData();
    this.BarChartData.labels = ['Income','Expenses','Left'];
    this.allCategories = this.chartData.pieChartCat;
    this.pieValues = this.chartData.chartPieData()[0].data;
    
    if(this.chartData.pieChart[0].data[0]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[0]);
      this.PieChartData.labels?.push('Utilities');
    }

    if(this.chartData.pieChart[0].data[1]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[1]);
      this.PieChartData.labels?.push('Rent');
    }

    if(this.chartData.pieChart[0].data[2]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[2]);
      this.PieChartData.labels?.push('Gas');
    }

    if(this.chartData.pieChart[0].data[3]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[3]);
      this.PieChartData.labels?.push('Cellphone');
    }

    if(this.chartData.pieChart[0].data[4]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[4]);
      this.PieChartData.labels?.push('Internet');
    }

    if(this.chartData.pieChart[0].data[5]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[5]);
      this.PieChartData.labels?.push('Housing');
    }

    if(this.chartData.pieChart[0].data[6]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[6]);
      this.PieChartData.labels?.push('Subscriptions');
    }

    if(this.chartData.pieChart[0].data[7]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[7]);
      this.PieChartData.labels?.push('Gym');
    }

    if(this.chartData.pieChart[0].data[8]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[8]);
      this.PieChartData.labels?.push('Clothing');
    }

    if(this.chartData.pieChart[0].data[9]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[9]);
      this.PieChartData.labels?.push('Transportation');
    }

    if(this.chartData.pieChart[0].data[10]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[10]);
      this.PieChartData.labels?.push('Entertainment');
    }

    if(this.chartData.pieChart[0].data[11]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[11]);
      this.PieChartData.labels?.push('Healthcare');
    }

    if(this.chartData.pieChart[0].data[12]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[12]);
      this.PieChartData.labels?.push('Gifts');
    }

    if(this.chartData.pieChart[0].data[13]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[13]);
      this.PieChartData.labels?.push('Pets');
    }

    if(this.chartData.pieChart[0].data[14]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[14]);
      this.PieChartData.labels?.push('Insurance');
    }

    if(this.chartData.pieChart[0].data[15]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[15]);
      this.PieChartData.labels?.push('Food');
    }

    if(this.chartData.pieChart[0].data[16]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[16]);
      this.PieChartData.labels?.push('Car Expenses');
    }

    if(this.chartData.pieChart[0].data[17]>0){
      this.PieChartData.datasets[0].data.push(this.pieValues[17]);
      this.PieChartData.labels?.push('Miscellaneous');
    }

    console.log(this.PieChartData.datasets[0].data);
    console.log(this.PieChartData.labels);
  }

  // Bar Chart

  public BarChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 100,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
        beginAtZero: true,
        max: 200,
      },
    },

    plugins: {
      legend: { display: true, position: 'bottom' },
    },
  };

  public BarChartType: ChartType = 'bar';


  // Pie Chart

  public PieChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 100,
      },
    },

    plugins: {
      legend: { display: true, position: 'bottom' },
    },
  };

  public PieChartType: ChartType = 'pie';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  addNewTransaction(){
    

    let amount: number = this.fg.controls.amount.value;
    let pos = this.fg.controls.pos.value;
    let category = this.fg.controls.category.value;
    let date = this.fg.controls.date.value;
    
    // this.chartData.newBarChart(amount, pos);
    this.chartData.newPieChart(amount, category);
  }
}
