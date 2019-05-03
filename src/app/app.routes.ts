import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';


const APP_ROUTERS: Routes = [
    // { path: 'login', component: LoginComponent },
     { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS, { useHash: true, scrollPositionRestoration: 'enabled' });
