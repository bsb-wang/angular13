import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testwijmo',
    templateUrl: './testwijmo.component.html',
    styleUrls: ['./testwijmo.component.css']
})
export class TestwijmoComponent implements OnInit {

    data:any[] = [];

    constructor() { }

    ngOnInit(): void {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        let count:number = 30;
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
