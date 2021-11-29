import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestwijmoRoutingModule } from './testwijmo-routing.module';
import { TestwijmoComponent } from './testwijmo.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';


@NgModule({
  declarations: [
    TestwijmoComponent,
  ],
  imports: [
    CommonModule,
    TestwijmoRoutingModule,
    WjGridModule
  ]
})
export class TestwijmoModule { }
