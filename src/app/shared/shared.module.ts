import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { SharedRoutingModule } from './sharedrouting';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    Test1Component,
    Test2Component
  ]
})
export class SharedModule { }
