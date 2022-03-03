import { Component, AfterViewInit, ViewChild, OnInit, Inject, Optional, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddProductoComponent } from '../productos/add-producto/add-producto.component';



export interface Productos {
  id: number;
  producto: string;
  cantidad: number;
  precio_c: number;
  precio_v: number;
  imagePath: string;
}

const productos = [
  {
    id: 1,
    producto: 'Camisa',
    cantidad: 150,
    precio_c: 80,
    precio_v: 150,
    imagePath: 'assets/images/camisa.jpeg'
  },
  {
    id: 2,
    producto: 'Pantalon',
    cantidad: 150,
    precio_c: 80,
    precio_v: 150,
    imagePath: 'assets/images/pantalon.jpg'
  },
  {
    id: 3,
    producto: 'Camisa',
    cantidad: 150,
    precio_c: 80,
    precio_v: 150,
    imagePath: 'assets/images/camisa.jpeg'
  },
  {
    id: 4,
    producto: 'Pantalon',
    cantidad: 150,
    precio_c: 80,
    precio_v: 150,
    imagePath: 'assets/images/pantalon.jpg'
  },
  {
    id: 5,
    producto: 'Camisa',
    cantidad: 150,
    precio_c: 80,
    precio_v: 150,
    imagePath: 'assets/images/camisa.jpeg'
  }
];



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'

})



export class ProductosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'producto', 'cantidad', 'precio_c', 'precio_v', 'action'];
  dataSource = new MatTableDataSource(productos);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

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
    const dialogRef = this.dialog.open(ProductoDialogContent, {
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
  addRowData(row_obj: Productos): void {
    this.dataSource.data.push({
      id: productos.length + 1,
      producto: row_obj.producto,
      cantidad: row_obj.cantidad,
      precio_c: row_obj.precio_c,
      precio_v: row_obj.precio_v,
      imagePath: row_obj.imagePath
    });
    this.dialog.open(AddProductoComponent);
    this.table.renderRows();
  }


  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: Productos): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.producto = row_obj.producto;
        value.cantidad = row_obj.cantidad;
        value.precio_c = row_obj.precio_c;
        value.precio_v = row_obj.precio_v;
        value.imagePath = row_obj.imagePath;
      }
      return true;
    });
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: Productos): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
  }
}


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class ProductoDialogContent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  selectedImage: any = '';
  joiningDate: any = '';

  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<ProductoDialogContent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Productos) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
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




