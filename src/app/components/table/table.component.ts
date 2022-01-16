import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/objets/flight';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: Flight[] = [];
  displayedColumns: string[] = ['id', 'departure', 'destination', 'date'];
  selectedFlight: Flight | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  //Sélection de l'utilisateur dans la liste
  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    //this.store.setSelectedUser(this.selectedUser);
  }
}
