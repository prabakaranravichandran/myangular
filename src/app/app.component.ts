import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Meta,Title} from '@angular/platform-browser';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  template:
  `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-scroll-tp></app-scroll-tp>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magzter';
  constructor(){
    const rxjsfunction$ = new Observable(subscriber => {
      subscriber.next('1');
      subscriber.next('2');
      subscriber.complete();
      subscriber.next('3');
      setTimeout(() => 
      subscriber.next('4'), 1000)
    })
    console.log('start')
    rxjsfunction$.subscribe(x=>{      
      console.log(x)
    })
    console.log('end')
    // console.log('start')
    // rxjsfunction$.subscribe(x=>{      
    //   console.log(x)
    // }, complete => {
    //   console.log('completed',complete)
    // })
    // console.log('end')
    // const diffFunction = () => {
    //   console.log("hi")
    // }
    // diffFunction()
  }
}
