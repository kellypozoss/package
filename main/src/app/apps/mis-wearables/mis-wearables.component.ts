import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Wearables } from '../interfaces/wearables';
import { WearableService } from 'src/app/services/wearable.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-mis-wearables',
  templateUrl: './mis-wearables.component.html',
  styleUrls: ['./mis-wearables.component.scss']
})
export class MisWearablesComponent implements AfterViewInit {

  listWearables: Wearables[] = [];

  displayedColumns = ['id', 'marca', 'modelo', 'variables', 'sincronizacion', 'estatus', 'opciones'];
  dataSource !: MatTableDataSource<any>;

  constructor(private _wearableService: WearableService, private _snackBar: MatSnackBar) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

  cargarWearables() {
    this.listWearables = this._wearableService.getWearable();
    this.dataSource = new MatTableDataSource(this.listWearables)
  }

  ngAfterViewInit(): void {
    this.cargarWearables();
    this.dataSource.paginator = this.paginator;
  }

  eliminarWearable(index: number) {
    console.log(index);

    this._wearableService.eliminarWearable(index);
    this.cargarWearables();

    this._snackBar.open('El wearable fue eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  sincronizarWearable(index: number) {
    this.cargarWearables();
    this._snackBar.open('El wearable se ha sincronizado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }
}
/* export interface Element {
  marca: string;
  id: number;
  modelo: string;
  variables: string;
  sincronizacion: string;
  estatus: boolean;
  opciones: string;
} */



