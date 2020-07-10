import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewUserComponent} from './components/new-user/new-user.component'
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [
  { path: 'new-user', component: NewUserComponent},
  { path: 'users-list', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
