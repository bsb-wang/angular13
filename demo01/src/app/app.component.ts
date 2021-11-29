import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

// Angular
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'demo01';

    constructor(
        private _router: Router,
    ) {
    }

    onClickTestForms() {
        this._router.navigate(['testform']);
    }

    onClickTestWijmo() {
        this._router.navigate(['testwijmo']);
    }

    onClickTestFlexbox() {
        this._router.navigate(['testflexbox']);
    }
}
