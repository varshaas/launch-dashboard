import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  getApiData(url: string){
    return this.http.get(url, {headers: {"Content-Type": "application/json"}})
  }
}
