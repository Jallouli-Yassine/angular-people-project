import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './private/add-user/add-user.component';
import { PoepleListComponent } from './private/poeple-list/poeple-list.component';
import { UpdateUserComponent } from './private/update-user/update-user.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { Page404Component } from './public/page404/page404.component';
import { RegisterComponent } from './public/register/register.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "poeple-list",
    component: PoepleListComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "update-user/:id",
    component: UpdateUserComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "**",
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
