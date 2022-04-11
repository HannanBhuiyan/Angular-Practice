import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-app-swiper-example',
  templateUrl: './app-swiper-example.component.html',
  styleUrls: ['./app-swiper-example.component.css']
})
export class AppSwiperExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderImgOne = '../../assets/images/banner1.jpg';
  sliderImgTwo = '../../assets/images/banner2.jpg';
  sliderImgThree = '../../assets/images/banner3.jpg';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
