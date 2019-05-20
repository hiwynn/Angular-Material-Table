import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sticky-table',
    templateUrl: './sticky-table.component.html',
    styleUrls: ['./sticky-table.component.css']
})
export class StickyTableComponent {

    displayedColumns: string[] = ['item', 'cost'];
    transactions = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
    ];

}
