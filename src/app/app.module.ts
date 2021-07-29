import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { PoepleListComponent } from './private/poeple-list/poeple-list.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { TestComponent } from './test/test.component';
import { Page404Component } from './public/page404/page404.component';


import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './private/add-user/add-user.component';
import { UpdateUserComponent } from './private/update-user/update-user.component';

//reactive form:
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PoepleListComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    Page404Component,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
