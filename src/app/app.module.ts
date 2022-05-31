import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from 'src/components/main/main.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from 'src/components/header/header.component';
import { MaterialModule } from './material.module';
import { CardComponent } from 'src/components/card/card.component';
import { NewsComponent } from 'src/components/news/news.component';
import { HomeComponent } from 'src/components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    CardComponent,
    HeaderComponent,
    AppComponent,
    MainComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
