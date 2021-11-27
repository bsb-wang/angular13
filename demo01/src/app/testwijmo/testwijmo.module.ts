import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestwijmoRoutingModule } from './testwijmo-routing.module';
import { TestwijmoComponent } from './testwijmo.component';


@NgModule({
  declarations: [
    TestwijmoComponent
  ],
  imports: [
    CommonModule,
    TestwijmoRoutingModule
  ]
})
export class TestwijmoModule { }
