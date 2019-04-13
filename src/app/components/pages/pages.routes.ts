import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
           // { path: 'tablas', component: TablasComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
