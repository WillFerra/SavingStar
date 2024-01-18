import { Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartsService } from '../services/charts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;



  colorArray: any;

  ionViewDidEnter() {
    console.log('ionViewDidEnter called')

  }

  constructor() {
    // function sumArray() {
    //   let total = 0;
    //   for (let i = 0; i < this.; i++) {
    //       total += arr[i];
    //   }
    //   return total;
    // }
  }
  

  public PieChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [130, 20],
        fill: 'origin',
      },
    ],
    labels: ['Left', 'Spent'],
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
