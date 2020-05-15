import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides = [
    {img: "../assets/banner-1a.jpg"},
    {img: "../assets/banner-1b.jpg"},
    {img: "../assets/banner-1a.jpg"},
    {img: "../assets/banner-1b.jpg"},
    {img: "../assets/banner-1a.jpg"},
    {img: "../assets/banner-1b.jpg"},
    {img: "../assets/banner-1a.jpg"},
    {img: "../assets/banner-1b.jpg"},
  ];
slideConfig={
"slidesToShow":1,
"slidesToScroll":2,
"dots":true,
"infinite":true,
'autoplay': true,
'autoplaySpeed': 2000,
}

  constructor() { }

  ngOnInit(): void {
  }

}
