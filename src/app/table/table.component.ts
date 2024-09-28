import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  position: string;
  office: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // Define employees as an array of Employee objects
  employees: Employee[] = [
    { name: 'Kaustubh', position: 'Developer', office: 'DEL' },
    { name: 'Nimit', position: 'Designer', office: 'BOM' },
    { name: 'Poornank', position: 'Manager', office: 'JPR' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
