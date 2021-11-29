import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestflexboxComponent } from './testflexbox.component';

const routes: Routes = [{ path: '', component: TestflexboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestflexboxRoutingModule { }
