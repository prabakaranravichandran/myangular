import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-scroll-tp',
  templateUrl: './scroll-tp.component.html',
  styleUrls: ['./scroll-tp.component.css']
})
export class ScrollTpComponent  {
  onScrollTopClick(){
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    });
  }
  constructor(@Inject(DOCUMENT) private Document:Document){}
  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollTp').classList.add('scrollTp')
    }else {
      document.getElementById('scrollTp').classList.remove('scrollTp')
    }

  }
}
