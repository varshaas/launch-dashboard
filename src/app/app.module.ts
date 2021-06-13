import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    MapViewComponent,
    BarChartComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    HighchartsChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiDqEsWE5csHXrrbjiuxuLKmqXPV1Izxg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
