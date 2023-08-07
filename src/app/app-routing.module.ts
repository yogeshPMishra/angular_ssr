import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { ServiceComponent } from './website/service/service.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"service",component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
