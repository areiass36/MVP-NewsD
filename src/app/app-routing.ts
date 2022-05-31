import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NewsComponent } from 'src/components/news/news.component';

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
      }
    ]
  }

];
