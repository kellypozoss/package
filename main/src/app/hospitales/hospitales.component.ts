import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Hospitales } from '../apps/interfaces/hospitales';
import { HospitalService } from '../services/hospital.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.scss']
})
export class HospitalesComponent implements AfterViewInit {

  listHospitales: Hospitales[] = [];
  displayedColumns = ['id', 'nombre', 'estado', 'correo', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _hospitalService: HospitalService, private _snackBar: MatSnackBar) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);


  cargarHospitales() {
    this.listHospitales = this._hospitalService.getHospital();
    this.dataSource = new MatTableDataSource(this.listHospitales)
  }

  ngAfterViewInit(): void {
    this.cargarHospitales();
    this.dataSource.paginator = this.paginator;
  }

  eliminarHospital(index: number) {
    console.log(index);

    this._hospitalService.eliminarHospital(index);
    this.cargarHospitales();

    this._snackBar.open('El hospital fue eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }


}