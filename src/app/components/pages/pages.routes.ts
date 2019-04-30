import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { WebSitesComponent } from './web-sites/web-sites.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'sitios-web', component: WebSitesComponent },
           // { path: 'tablas', component: TablasComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
