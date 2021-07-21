import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';




const ELEMENT_DATA: Element[] = [
  { enfermedad: 'Hipertensión' },
  { enfermedad: 'Diabetes' },
  { enfermedad: 'Arritmias' },
  { enfermedad: 'Cardiopatías' },
  { enfermedad: 'Insuficiencia cardíaca' }

];
@Component({
  selector: 'app-antecedentes-familiares',
  templateUrl: './antecedentes-familiares.component.html',
  styleUrls: ['./antecedentes-familiares.component.scss']
})
export class AntecedentesFamiliaresComponent {

  displayedColumns = ['enfermedad', 'madre', 'padre', 'ambos'];
  // dataSource !: MatTableDataSource<any>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'Enfermedad' }, { name: 'Madre' }, { name: 'Padre' }, { name: 'Ambos' }];


  checked = true;
  indeterminate = false;
  align = 'start';
  disabled = false;
  labelPosition = false;


  favoriteSeason = '';
  seasons: string[] = ['Madre', 'Padre', 'Ambos'];



  constructor(private _snackBar: MatSnackBar) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();
  }
}

export interface Element {
  enfermedad: string;


}



