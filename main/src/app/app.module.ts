
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AppRoutes } from './app.routing';
import { app_routing } from './app.route';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';


import { VerticalAppHeaderComponent } from './layouts/full/vertical-header/vertical-header.component';
import { VerticalAppSidebarComponent } from './layouts/full/vertical-sidebar/vertical-sidebar.component';
import { HorizontalAppHeaderComponent } from './layouts/full/horizontal-header/horizontal-header.component';
import { HorizontalAppSidebarComponent } from './layouts/full/horizontal-sidebar/horizontal-sidebar.component';


import { AppBreadcrumbComponent } from './layouts/full/breadcrumb/breadcrumb.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { mailService, mailGlobalVariable } from './apps/mailbox/mail.service';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './charts/chart-js/chartjs.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";


import { EmpresaComponent } from './empresa/empresa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecomendacionesEstadisticasComponent } from './recomendaciones-estadisticas/recomendaciones-estadisticas.component';
import { AnalisisVentaComponent } from './analisis-venta/analisis-venta.component';
import { AgregarProductoComponent } from './apps/agregar-producto/agregar-producto.component';
import { HistorialVentasComponent, HistorialDialogContent } from './historial-ventas/historial-ventas.component';
import { AgregarVentaComponent } from './apps/agregar-venta/agregar-venta.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarEmpresa2Component } from './editar-empresa2/editar-empresa2.component';
import { AddVentaComponent } from './historial-ventas/add-venta/add-venta.component';




PdfMakeWrapper.setFonts(pdfFonts);




export function HttpLoaderFactory(http: HttpClient): any {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};


@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        VerticalAppHeaderComponent,
        SpinnerComponent,
        AppBlankComponent,
        VerticalAppSidebarComponent,
        AppBreadcrumbComponent,
        HorizontalAppHeaderComponent,
        HorizontalAppSidebarComponent,
        GeneratePdfComponent,
        EmpresaComponent,
        PerfilComponent,
        RecomendacionesEstadisticasComponent,
        AnalisisVentaComponent,
        AgregarProductoComponent,
        HistorialVentasComponent,
        AgregarVentaComponent,
        EditarEmpresaComponent,
        EditarPerfilComponent,
        EditarEmpresa2Component,
        AddVentaComponent,
        HistorialDialogContent





    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule,
        FlexLayoutModule,
        HttpClientModule,
        PerfectScrollbarModule,
        SharedModule,
        NgxDatatableModule,
        ChartsModule,
        FlexLayoutModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forRoot(AppRoutes, { relativeLinkResolution: 'legacy' }),
        app_routing,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, mailService, mailGlobalVariable,
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
