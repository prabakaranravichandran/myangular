import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SmartreadingzoneComponent } from './smartreadingzone/smartreadingzone.component';
import { HighlightzoneComponent } from './highlightzone/highlightzone.component';
import { FormComponent } from './form/form.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ScrollTpComponent } from './scroll-tp/scroll-tp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SmartreadingzoneComponent,
    HighlightzoneComponent,
    FormComponent,
    NavmenuComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    ScrollTpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
