import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, OnInit, Inject, Optional, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddVentaComponent } from './add-venta/add-venta.component';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

export interface Historial {
  id: number;
  fecha: Date;
  producto: string;
  cantidad: number;
  precio_v: number;
}


const ventas = [
  {
    id: 1,
    fecha: new Date('01-2-2020'),
    producto: 'Zapatos vestir negro',
    cantidad: 15,
    precio_v: 150
  },
  {
    id: 2,
    fecha: new Date('02-2-2020'),
    producto: 'Camisa deportiva negra',
    cantidad: 15,
    precio_v: 150
  },
  {
    id: 3,
    fecha: new Date('03-2-2020'),
    producto: 'Cinturon cuero',
    cantidad: 15,
    precio_v: 150
  },
  {
    id: 4,
    fecha: new Date('03-2-2020'),
    producto: 'Camisa formal',
    cantidad: 15,
    precio_v: 150
  }

];

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.scss']
})
export class HistorialVentasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'fecha', 'producto', 'cantidad', 'precio_v', 'action'];
  dataSource = new MatTableDataSource(ventas);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  downloadPDF() {
    const pdf = new PdfMakeWrapper();

    pdf.add(
      //aqui son definiciones por lo tanto puede ser txt, img, etc
      new Txt(`Historial de ventas
      ___________________
      ___________________
      ___________________
  `).bold().end
    );
    pdf.create().download();
  }

  constructor(public dialog: MatDialog, public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(HistorialDialogContent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Agregar') {
        this.addRowData(result.data);
      } else if (result.event === 'Actualizar') {
        this.updateRowData(result.data);
      } else if (result.event === 'Eliminar') {
        this.deleteRowData(result.data);
      }
    });
  }

  // tslint:disable-next-line - Disables all
  addRowData(row_obj: Historial): void {
    this.dataSource.data.push({
      id: ventas.length + 1,
      fecha: new Date(),
      producto: row_obj.producto,
      cantidad: row_obj.cantidad,
      precio_v: row_obj.precio_v

    });
    this.dialog.open(AddVentaComponent);
    this.table.renderRows();
  }

  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: Historial): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.fecha = row_obj.fecha;
        value.producto = row_obj.producto;
        value.cantidad = row_obj.cantidad;
        value.precio_v = row_obj.precio_v;
      }
      return true;
    });
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: Historial): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
  }
}


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class HistorialDialogContent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  selectedImage: any = '';
  joiningDate: any = '';

  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<HistorialDialogContent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Historial) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    if (this.local_data.fecha !== undefined) {
      this.joiningDate = this.datePipe.transform(new Date(this.local_data.fecha), 'yyyy-MM-dd');
    }
    if (this.local_data.imagePath === undefined) {
      this.local_data.imagePath = 'assets/images/users/default.png';
    }
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = (_event) => {
      // tslint:disable-next-line - Disables all
      this.local_data.imagePath = reader.result;
    };
  }


}
