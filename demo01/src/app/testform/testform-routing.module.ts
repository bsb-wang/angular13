import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestformComponent } from './testform.component';

const routes: Routes = [{ path: '', component: TestformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestformRoutingModule { }
