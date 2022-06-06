import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NewsComponent } from 'src/components/news/news.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { NewContentComponent } from 'src/components/new-content/new-content.component';
import { AuthService } from 'src/services/auth.service';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'news/:id',
        component: NewsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'new-content',
        component: NewContentComponent,
        canActivate: [AuthService]
      }
    ]
  }

];
