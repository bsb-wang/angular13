import { StaticReflector } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

import { WjFlexGrid } from '@grapecity/wijmo.angular2.grid';

@Component({
    selector: 'app-testflexbox',
    templateUrl: './testflexbox.component.html',
    styleUrls: ['./testflexbox.component.css']
})
export class TestflexboxComponent implements OnInit {

    data: any[] = [];

    @ViewChild('flexgrid') private flexgrid: WjFlexGrid;
    constructor() { }

    ngOnInit(): void {
        this.flexgrid.initialize;
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        let count: number = 30;
        this.data = [];
        for (var i = 0; i < count; i++) {
            this.data.push({
                id: i,
                country: countries[i % countries.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 == 0
            });
        }
    }

}
