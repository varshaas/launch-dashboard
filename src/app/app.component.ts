import { Component, OnInit } from '@angular/core';
import { DashboardService } from './components/dashboard.service';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dashboardService: DashboardService) { }
  title = 'dashboard-project';

  ngOnInit() {
  }
}
