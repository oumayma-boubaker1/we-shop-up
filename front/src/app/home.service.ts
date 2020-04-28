import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _homesUrl = "http://localhost:3000/api/home";
  private _specialEventsUrl = "http://localhost:3000/api/special-events";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._homesUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
}
