import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


home = [];
constructor(private homeService: HomeService) { }

ngOnInit() {
  this.homeService.getEvents()
    .subscribe(
      res => this.home = res,
      err => console.log(err)
    );
}

}
