import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddComponent } from './add/add.component';

export interface Employee {
    id: number;
    Nombre: string;
    Apellidos: string;
    Telefono: string;
    Correo: string;
    Sueldo: number;
    imagePath: string;
}

const employees = [
    {
        id: 1,
        Nombre: 'Johnathan',
        Apellidos: 'Deo',
        Telefono: '9786838',
        Correo: 'r@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/2.jpg'
    },
    {
        id: 2,
        Nombre: 'Mark',
        Apellidos: 'Zukerburg',
        Telefono: '9786838',
        Correo: 'mark@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/3.jpg'
    },
    {
        id: 3,
        Nombre: 'Sam',
        Apellidos: 'Smith',
        Telefono: '9786838',
        Correo: 'r@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/4.jpg'
    },
    {
        id: 4,
        Nombre: 'Nathan',
        Apellidos: 'Deo',
        Telefono: '9786838',
        Correo: 'n@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/5.jpg'
    },
    {
        id: 5,
        Nombre: 'Genilia',
        Apellidos: 'Min',
        Telefono: '9786838',
        Correo: 'genilia@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/6.jpg'
    },
    {
        id: 6,
        Nombre: 'Jack',
        Apellidos: 'Sparrow',
        Telefono: '9786838',
        Correo: 'jack@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/7.jpg'
    },
    {
        id: 7,
        Nombre: 'Jack',
        Apellidos: 'Sparrow',
        Telefono: '9786838',
        Correo: 'jack@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/3.jpg'
    },
    {
        id: 8,
        Nombre: 'Manila',
        Apellidos: 'Baez',
        Telefono: '9786838',
        Correo: 'man@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/6.jpg'
    },
    {
        id: 9,
        Nombre: 'Kristen',
        Apellidos: 'Jules',
        Telefono: '9786838',
        Correo: 'kris@gmail.com',
        Sueldo: 1000,
        imagePath: 'assets/images/users/5.jpg'
    }
];

@Component({
    templateUrl: './employee.component.html'
})


export class EmployeeComponent implements OnInit, AfterViewInit {


    @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
    searchText: any;
    displayedColumns: string[] = ['#', 'nombre', 'apellidos', 'telefono', 'correo', 'sueldo', 'action'];
    dataSource = new MatTableDataSource(employees);
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
        const dialogRef = this.dialog.open(EmployeeDialogContent, {
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
    addRowData(row_obj: Employee): void {
        this.dataSource.data.push({
            id: employees.length + 1,
            Nombre: row_obj.Nombre,
            Apellidos: row_obj.Apellidos,
            Telefono: row_obj.Telefono,
            Correo: row_obj.Correo,
            Sueldo: row_obj.Sueldo,
            imagePath: row_obj.imagePath
        });
        this.dialog.open(AddComponent);
        this.table.renderRows();
    }

    // tslint:disable-next-line - Disables all
    updateRowData(row_obj: Employee): boolean | any {
        this.dataSource.data = this.dataSource.data.filter((value: any) => {
            if (value.id === row_obj.id) {
                value.Nombre = row_obj.Nombre;
                value.Apellidos = row_obj.Apellidos;
                value.Telefono = row_obj.Telefono;
                value.Correo = row_obj.Correo;
                value.Sueldo = row_obj.Sueldo;
                value.imagePath = row_obj.imagePath;
            }
            return true;
        });
    }

    // tslint:disable-next-line - Disables all
    deleteRowData(row_obj: Employee): boolean | any {
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
export class EmployeeDialogContent {
    action: string;
    // tslint:disable-next-line - Disables all
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';

    constructor(
        public datePipe: DatePipe,
        public dialogRef: MatDialogRef<EmployeeDialogContent>,
        // @Optional() is used to prevent error if no data is passed
        @Optional() @Inject(MAT_DIALOG_DATA) public data: Employee) {
        this.local_data = { ...data };
        this.action = this.local_data.action;
        /* if (this.local_data.DateOfJoining !== undefined) {
            this.joiningDate = this.datePipe.transform(new Date(this.local_data.DateOfJoining), 'yyyy-MM-dd');
        } */
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
