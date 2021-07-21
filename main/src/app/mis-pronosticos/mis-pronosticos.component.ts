import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

const ELEMENT_DATA: Element[] = [
  { id: 1, fecha: '20-05-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 2, fecha: '10-05-2021', descripcion: 'El paciente sigue igual con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 3, fecha: '15-04-2021', descripcion: 'Al paciente se le ha modificado el tratamiento', opciones: 'Descargar, Ver' },
  { id: 4, fecha: '11-03-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 5, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 6, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 7, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 8, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 9, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' },
  { id: 10, fecha: '11-02-2021', descripcion: 'El paciente ha mejorado con el tratamiento', opciones: 'Descargar, Ver' }
];

@Component({
  selector: 'app-mis-pronosticos',
  templateUrl: './mis-pronosticos.component.html',
  styleUrls: ['./mis-pronosticos.component.scss']
})
export class MisPronosticosComponent implements AfterViewInit {

  displayedColumns = ['id', 'fecha', 'descripcion', 'opciones'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['id', 'fecha', 'descripcion', 'opciones'] :
        ['id', 'fecha', 'descripcion', 'opciones'];
    });
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  generatePDF() {
    const pdf = new PdfMakeWrapper();

    pdf.add(
      //aqui son definiciones por lo tanto puede ser txt, img, etc
      new Txt(`Pronóstico

      Síntomas:

      - Falta de aire
      - Mareos
      - Náuseas
      - Vómito
      - Agotamiento
      
      Tratamiento recomendado:
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      
      
      Factores de riesgo:

      - Estrés
      - Tabaquismo
      - Consumo de alcohol
      - Estilo de vida sedentario`).bold().end



    );
    pdf.create().open();
  }

  downloadPDF() {
    const pdf = new PdfMakeWrapper();

    pdf.add(
      //aqui son definiciones por lo tanto puede ser txt, img, etc
      new Txt(`Pronóstico

      Síntomas:

      - Falta de aire
      - Mareos
      - Náuseas
      - Vómito
      - Agotamiento
      
      Tratamiento recomendado:
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      __________________________
      
      
      Factores de riesgo:

      - Estrés
      - Tabaquismo
      - Consumo de alcohol
      - Estilo de vida sedentario`).bold().end
    );
    pdf.create().download();
  }
}
export interface Element {
  fecha: string;
  id: number;
  descripcion: string;
  opciones: string;
}
