import { CommonModule } from '@angular/common';
import { Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

// import { default as Annotation } from 'chartjs-plugin-annotation';
// import { default as DataLabelsPlugin } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // imports: [IonicModule, FormsModule, CommonModule, NgChartsModule]
})
export class Tab1Page {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  colorArray: any;

  constructor() {}

  ionViewDidEnter() {
    console.log('ionViewDidEnter called')

  }

  public BarChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [150, 20, 130],
        label: 'January',
        fill: 'origin',
      },
    ],
    labels: ['Income', 'Expenses', 'Left'],
  };

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

  public PieChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [10, 7, 3],
        fill: 'origin',
      },
    ],
    labels: ['Clothes', 'Bowling', 'Coffee'],
  };

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
}
