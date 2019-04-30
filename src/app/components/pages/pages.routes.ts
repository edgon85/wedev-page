import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { WebSitesComponent } from './web-sites/web-sites.component';
import { SocialMediaComponent } from './social-media/social-media.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'sitios-web', component: WebSitesComponent },
            { path: 'social-media', component: SocialMediaComponent },
           // { path: 'tablas', component: TablasComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
