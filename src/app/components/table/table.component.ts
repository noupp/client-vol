import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  highlight(element: Flight) {
     element.highlighted = !element.highlighted;
     console.log(element.highlighted);
  }
  //Sélection de l'utilisateur dans la liste
  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    this.router.navigate(['flights', flight.id, 'places']);
  }
}
