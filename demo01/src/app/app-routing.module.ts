import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    // {path: '', component: AppComponent},
    { path: 'testform', loadChildren: () => import('./testform/testform.module').then(m => m.TestformModule) },
    { path: 'testwijmo', loadChildren: () => import('./testwijmo/testwijmo.module').then(m => m.TestwijmoModule) },
    { path: 'testflexbox', loadChildren: () => import('./testflexbox/testflexbox.module').then(m => m.TestflexboxModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
