import { Injectable } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private sharedService: SharedService) { }
  getAllData(url: string) {
    return this.sharedService.getApiData('https://api.spacexdata.com/v3/' + url).pipe(catchError(() => of(null)))
  }
  getAllJoined(keyarr: any) {
    let arr: any = []
    keyarr.forEach((element: any) => {
      arr.push(this.getAllData(element))
    });
    return forkJoin(arr)
  }
}
