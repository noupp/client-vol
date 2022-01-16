import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/objets/flight';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: Flight[] = [];
  dataSource: MatTableDataSource<Flight> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'departure', 'destination', 'date'];
  selectedFlight: Flight | undefined;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    console.log(this.dataSource);
  }

  //Sélection de l'utilisateur dans la liste
  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    //this.store.setSelectedUser(this.selectedUser);
  }
}
