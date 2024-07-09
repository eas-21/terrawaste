import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProjectComponent } from './core/project/project.component';
import { ServiceComponent } from './core/service/service.component';
import { IoTComponent } from './core/service/io-t/io-t.component';

const routes: Routes = [{
  path:'', component: AdminLayoutComponent,
  children:[
    {
      path:'', component:HomeComponent,
      loadChildren:()=>import('../app/core/home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'service', component:ServiceComponent,
      loadChildren:()=>import('../app/core/service/service.module').then(m=>m.ServiceModule)
    },
    { path:'IOT', component: IoTComponent},
    { path:'about', component: AboutComponent},
    { path:'contact', component: ContactComponent},
    { path:'project', component: ProjectComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
