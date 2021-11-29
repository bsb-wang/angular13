import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestflexboxRoutingModule } from './testflexbox-routing.module';
import { TestflexboxComponent } from './testflexbox.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [
    TestflexboxComponent
  ],
  imports: [
    CommonModule,
    WjGridModule,
    TestflexboxRoutingModule
  ]
})
export class TestflexboxModule { }
