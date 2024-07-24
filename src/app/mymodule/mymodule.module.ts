import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex1Component } from './ex1/ex1.component';



@NgModule({
  declarations: [
    Ex1Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Ex1Component
  ]
})
export class MymoduleModule { }
