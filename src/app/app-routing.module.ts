import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { WorkersListComponent } from './components/workers/workers-list/workers-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { WorkersCreateComponent } from './components/workers/workers-create/workers-create.component';
import { WorkersUpdateComponent } from './components/workers/workers-update/workers-update.component';
import { WorkersDeleteComponent } from './components/workers/workers-delete/workers-delete.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent,canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'workers', component: WorkersListComponent},
      {path: 'workers/create', component: WorkersCreateComponent},
      {path: 'workers/update/:id', component: WorkersUpdateComponent},
      {path: 'workers/delete/:id', component: WorkersDeleteComponent},

      {path: 'customers', component: CustomersListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
