import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
  path: 'contact',
  component: ContactComponent
},
{
path: 'about',
component: AboutComponent
},
{
path: 'search-page',
component: SearchPageComponent
},
{
  path:"search-page",
  component:SearchComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
