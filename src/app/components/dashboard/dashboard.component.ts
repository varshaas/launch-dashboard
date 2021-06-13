import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  launchpadDetails: any;
  allLaunchesData: any;
  upcomingLaunchesData: any;
  pastLaunchesData: any;
  apiUrlArr = [
    'launches',
    'launches/upcoming',
    'launches/past',
    'launchpads'
  ]
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllJoined(this.apiUrlArr).subscribe(
      (data: any) => {
        this.allLaunchesData = data[0]
        this.upcomingLaunchesData = data[1]
        this.pastLaunchesData = data[2]
        this.launchpadDetails = data[3]
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
}
