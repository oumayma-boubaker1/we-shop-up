import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homesUrl = 'http://localhost:3000/api/home';
  private specialEventsUrl = 'http://localhost:3000/api/special-events';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this.homesUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this.specialEventsUrl);
  }
}
