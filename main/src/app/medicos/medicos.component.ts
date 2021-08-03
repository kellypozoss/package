import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSource } from '@angular/cdk/collections';
import { Medicos } from '../apps/interfaces/medicos';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements AfterViewInit {

  listMedicos: Medicos[] = [];
  displayedColumns = ['id', 'nombre', 'apellido', 'especialidad', 'correo', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _medicoService: MedicoService, private _snackBar: MatSnackBar) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);


  cargarMedicos() {
    this.listMedicos = this._medicoService.getMedico();
    this.dataSource = new MatTableDataSource(this.listMedicos)
  }

  ngAfterViewInit(): void {
    this.cargarMedicos();
    this.dataSource.paginator = this.paginator;
  }

  eliminarMedico(index: number) {
    console.log(index);

    this._medicoService.eliminarMedico(index);
    this.cargarMedicos();

    this._snackBar.open('El médico fue eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }


}
