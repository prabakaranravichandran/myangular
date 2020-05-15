import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartreadingzone',
  templateUrl: './smartreadingzone.component.html',
  styleUrls: ['./smartreadingzone.component.css']
})
export class SmartreadingzoneComponent implements OnInit {
  highlightimg = [
    {img: "/assets/Hotels.png",txt:'Hotels'},
    {img: "/assets/restaurant.png",txt:'Restaurant'},
    {img: "/assets/club.png",txt:'Clubs'},
    {img: "/assets/malls.png",txt:' Malls'},
    {img: "/assets/gated-housing.png",txt:'Gated Housing Communities'},
    {img: "/assets/salons.png",txt:'salons'},
    {img: "/assets/hospitals.png",txt:'hospitals'},
    {img: "/assets/retail-stores.png",txt:'retail-stores'},
    {img: "/assets/banks.png",txt:'banks'},
    {img: "/assets/educational-institutions.png",txt:'Educational Institutions'}  , 
    {img: "/assets/libraries.png",txt:'libraries'},
    {img: "/assets/corporates.png",txt:'Corporatres'},
    {img: "/assets/airport.png",txt:'Airports'},
    {img: "/assets/gym.png",txt:'Gyms'},
    {img: "/assets/country.png",txt:'Countries'},
    {img: "/assets/villa.png",txt:'Villas'},
    {img: "/assets/corporates.png",txt:'Corporates'},
    {img: "/assets/condominium.png",txt:'Condominium'},
    {img: "/assets/city.png",txt:'Smart Cities'},
     
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
