import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {


  specialEvents = []

  constructor(private homeService: HomeService,
              private router: Router) { }


  ngOnInit() {
    this.homeService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if ( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {

              this.router.navigate(['/register']);

            }
          }
        }
      );
  }

}
