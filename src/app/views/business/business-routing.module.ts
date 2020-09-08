import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormersListComponent } from './formers-list/formers-list.component';


const routes: Routes = [
  {
     path:'',
     children:[
      {path:"clientslist",component:FormersListComponent},
      {path:"userslist",component:DashboardComponent},
     ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
