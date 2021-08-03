import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HipertensionService } from '../services/hipertension.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSource } from '@angular/cdk/collections';
import { Hipertension } from '../apps/interfaces/hipertension';
@Component({
  selector: 'app-hipertension',
  templateUrl: './hipertension.component.html',
  styleUrls: ['./hipertension.component.scss']
})
export class HipertensionComponent implements AfterViewInit {

  listHiper: Hipertension[] = [];
  displayedColumns = ['id', 'nombre', 'apellido', 'correo', 'wearable', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _hiperService: HipertensionService, private _snackBar: MatSnackBar) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);


  cargarHipertension() {
    this.listHiper = this._hiperService.getHipertension();
    this.dataSource = new MatTableDataSource(this.listHiper)
  }

  ngAfterViewInit(): void {
    this.cargarHipertension();
    this.dataSource.paginator = this.paginator;
  }

  eliminarHipertension(index: number) {
    console.log(index);

    this._hiperService.eliminarHipertension(index);
    this.cargarHipertension();

    this._snackBar.open('El paciente fue eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  // This is line chart
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10
  };

  public barChartLabels: string[] = [
    'Paciente1',
    'Paciente2',
    'Paciente3',
    'Paciente4',
    'Paciente5'

  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Hipertensión' }

  ];
  public barChartColors: Array<any> = [
    { backgroundColor: '#1976d2' },
    { backgroundColor: '#26dad2' }
  ];
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Hombre',
    'Mujer'
  ];
  public doughnutChartData: number[] = [60, 40];
  public doughnutChartType = 'doughnut';

  // Pie
  public pieChartLabels: string[] = [
    'Arritmias',
    'Cardiopatia',
    'Miocardiopatias'
  ];
  public pieChartData: number[] = [65, 20, 15];
  public pieChartType = 'pie';

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(25,118,210,0.1)',
      borderColor: 'rgba(25,118,210,1)',
      pointBackgroundColor: 'rgba(25,118,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(25,118,210,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(38,218,210,0.1)',
      borderColor: 'rgba(38,218,210,1)',
      pointBackgroundColor: 'rgba(38,218,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38,218,210,0.5)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}