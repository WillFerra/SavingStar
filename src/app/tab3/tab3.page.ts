import { Component, ViewChild, OnInit} from '@angular/core';
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

export class Tab3Page implements OnInit {
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;



  colorArray: any;

  ionViewDidEnter() {
    console.log('ionViewDidEnter called')

  }

  constructor(private chartData:ChartsService) {}

  ngOnInit(){
    this.updateChartData();
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

  updateChartData() {
    this.chartData.getTotalData().subscribe(
      (data: number[]) => {
        // Assuming data is an array with the values you want
        this.PieChartData.datasets[0].data = data;
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
