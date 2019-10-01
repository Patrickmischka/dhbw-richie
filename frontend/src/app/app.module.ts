import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterial } from "../angular-material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial,
    FormsModule,
    CommonModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
