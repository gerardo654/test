import { Component, OnInit } from '@angular/core';
import {banners} from "../../../environments/environment";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  abanner = banners;
  constructor() { }

  ngOnInit(): void {
  }

}
