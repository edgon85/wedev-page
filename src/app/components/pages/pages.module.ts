import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { WebSitesComponent } from './web-sites/web-sites.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    WebSitesComponent,
    SocialMediaComponent,
    PortfolioComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent,
    WebSitesComponent,
    SocialMediaComponent,
    PortfolioComponent
  ]
})
export class PagesModule { }
