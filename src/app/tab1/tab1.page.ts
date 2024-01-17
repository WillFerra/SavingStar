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
export class Tab1Page {

  // month:string|undefined;
  // pos:number|undefined;
  // value:number|undefined;

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
    datasets : [],
    labels : []
  };

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  colorArray: any;

  constructor(private chartData:ChartsService) {
    this.BarChartData.datasets = this.chartData.chartBarData();
    this.BarChartData.labels = ['Income','Expenses','Left'];
    this.PieChartData.datasets = this.chartData.chartPieData();
    this.PieChartData.labels = [
      'Utilities',
      'Rent',
      'Gas',
      'Cellphone',
      'Internet',
      'Housing',
      'Subscriptions',
      'Gym',
      'Clothing',
      'Transportation',
      'Entertainment',
      'Healthcare',
      'Gifts',
      'Pets',
      'Insurance',
      'Food',
      'Car Expenses',
      'Miscellaneous'];
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter called')
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
    let amount = this.fg.controls.amount.value;
    let pos = this.fg.controls.pos.value;
    let label = this.fg.controls.label.value;
    let category = this.fg.controls.category.value;
    let date = this.fg.controls.date.value;
    
    this.chartData.newBarChart(amount, pos, label);
    this.chartData.newPieChart(amount, pos, label, category);
  }
}
