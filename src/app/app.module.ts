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
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
