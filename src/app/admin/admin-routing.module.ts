import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NvComponent } from './nv/nv.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path:'admin', component: DashboardComponent },
  {
    path:'admin',
    children:[
      {path:'nv', component: NvComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
