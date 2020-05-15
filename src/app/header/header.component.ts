import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(@Inject(DOCUMENT) private Document:Document){}
  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('headerFixed').classList.add('headerFixed')
    }else {
      document.getElementById('headerFixed').classList.remove('headerFixed')
    }

  }

}
