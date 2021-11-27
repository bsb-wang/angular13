import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestformRoutingModule } from './testform-routing.module';
import { TestformComponent } from './testform.component';


@NgModule({
  declarations: [
    TestformComponent
  ],
  imports: [
    CommonModule,
    TestformRoutingModule
  ]
})
export class TestformModule { }
