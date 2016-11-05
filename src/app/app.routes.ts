import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { SearchComponent } from './search';
import { NoContentComponent } from './no-content';
import {EditComponent} from './edit'
import {AddComponent} from './add'
import {LoginComponent} from "./login";
import { DataResolver } from './app.resolver';



export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
   { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {path: 'edit',   component: EditComponent},
  {path: 'add',     component: AddComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
