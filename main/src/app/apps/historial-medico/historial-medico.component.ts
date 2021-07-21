import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';


const ELEMENT_DATA: Element[] = [
  { position: 1, name: '28-06-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'H' },
  { position: 2, name: '21-06-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'He' },
  { position: 3, name: '20-05-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'Li' },
  { position: 4, name: '20-04-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'Be' },
  { position: 5, name: '20-03-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'B' },
  { position: 6, name: '20-02-2021', weight: 'Dolor de cabeza, Vómito...', symbol: 'C' }
];


@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.scss']
})
export class HistorialMedicoComponent {

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['position', 'name', 'weight', 'symbol'] :
        ['position', 'name', 'weight', 'symbol'];
    });
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}