import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestwijmoComponent } from './testwijmo.component';

const routes: Routes = [{ path: '', component: TestwijmoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestwijmoRoutingModule { }
