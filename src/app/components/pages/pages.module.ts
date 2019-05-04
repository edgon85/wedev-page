import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { WebSitesComponent } from './web-sites/web-sites.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail.component';
import { KeysPipe } from '../../pipes/keys.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    WebSitesComponent,
    SocialMediaComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioDetailComponent,
    KeysPipe,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PagesComponent,
    WebSitesComponent,
    SocialMediaComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioDetailComponent
  ]
})
export class PagesModule { }
