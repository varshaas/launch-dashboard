import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() allLaunchesData: any
  launchYear: any = [];
  allLaunchYear: any = [];
  launchCount: any = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.launchYear;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: Array<any>(),
      label: 'Launches'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.getChartData()
  }
  getChartData() {
    let duplicateLaunchYear: any
    this.allLaunchesData.forEach((element: any) => {
      this.allLaunchYear.push(element.launch_year)
      duplicateLaunchYear = this.allLaunchYear.reduce(this.countDuplicates, {});
      let elePresent = this.launchYear.includes(element.launch_year)
      if (!elePresent) this.launchYear.push(element.launch_year)
    });
    this.launchCount = Object.keys(duplicateLaunchYear).map(key => duplicateLaunchYear[key]);
    this.barChartData[0].data = this.launchCount
  }
  countDuplicates(obj: any, num: any) {
    obj[num] = (++obj[num] || 1);
    return obj;
  }
}
