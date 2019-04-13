import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
