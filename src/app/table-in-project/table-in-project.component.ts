import {Component, OnInit} from '@angular/core';

const ELEMENT_DATA = [{
    "CourseInstance": {
        "CourseInstanceId": 6166302,
        "Title": "GEOMETRY B CP",
        "CourseCode": "SGI1106",
        "GradeLetter": "B ",
        "IsPartial": false,
        "CanOpen": true
    },
    "Units": [
        {
            "Title": "UNIT 6 (5 days)",
            "Status": "Completed",
            "GradeLetter": "P ",
            "AssignedMonthNumber": 6,
            "CompletedMonthNumber": 6,
            "SelectedMonth": false
        },
        {
            "Title": "UNIT 7 (5 days)",
            "Status": "Completed",
            "GradeLetter": "P ",
            "AssignedMonthNumber": 6,
            "CompletedMonthNumber": 6,
            "SelectedMonth": false
        }
    ]
}, {
    "CourseInstance": {
        "CourseInstanceId": 6167558,
        "Title": "WORLD HISTORY B CP",
        "CourseCode": "HS3041",
        "GradeLetter": null,
        "IsPartial": false,
        "CanOpen": true
    },
    "Units": [
        {
            "Title": "Unit 9 - (5 Days)",
            "Status": "Assigned",
            "GradeLetter": null,
            "AssignedMonthNumber": 5,
            "CompletedMonthNumber": null,
            "SelectedMonth": false
        },
        {
            "Title": "Unit l0 - (5 Days)",
            "Status": "Assigned",
            "GradeLetter": null,
            "AssignedMonthNumber": 5,
            "CompletedMonthNumber": null,
            "SelectedMonth": false
        }]
}];

@Component({
    selector: 'app-table-in-project',
    templateUrl: './table-in-project.component.html',
    styleUrls: ['./table-in-project.component.css']
})
export class TableInProjectComponent {

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
