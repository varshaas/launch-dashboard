import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() allLaunchesData: any;
  sortedLaunchData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getTimeLineData()
  }
  getTimeLineData() {
    const itemByYear: any = {};
    for (let v of this.allLaunchesData) {
      if (!itemByYear[v.launch_year]) {
        itemByYear[v.launch_year] = []
      }
      itemByYear[v.launch_year].push(v);
    }
    for (let k in itemByYear) {
      this.sortedLaunchData.push(itemByYear[k]);
    }
  }
}
