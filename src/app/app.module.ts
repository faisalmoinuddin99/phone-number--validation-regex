import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PatternExpressionValidatorComponent } from './pattern-expression.component';
import { AppComponent } from './app.component';

import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RxReactiveFormsModule,HttpClientModule ],
  declarations: [AppComponent, PatternExpressionValidatorComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
