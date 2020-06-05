import { Component, OnInit } from '@angular/core';
interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  }];
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  constructor() { }

  ngOnInit(): void {
  }
  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
