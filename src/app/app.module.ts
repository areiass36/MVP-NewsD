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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { AlertComponent } from 'src/components/alert/alert.component';
import { NewContentComponent } from 'src/components/new-content/new-content.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ErrorInterceptorService } from 'src/services/error.service';

@NgModule({
  declarations: [
    NewContentComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    CardComponent,
    HeaderComponent,
    AppComponent,
    MainComponent
  ],
  imports: [
    RichTextEditorAllModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
