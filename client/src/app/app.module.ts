import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app.module.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AvailService } from './avail.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    AvailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
