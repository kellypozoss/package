
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

import { Glucosa2Component } from './app/apps/dashboards/dashboard-components/glucosa2/glucosa2.component';
import { DatosMedicosComponent } from './datos-medicos/datos-medicos.component';
import { AntecedentesFamiliaresComponent } from './apps/antecedentes-familiares/antecedentes-familiares.component';
import { AntecedentesEnfermedadComponent } from './apps/antecedentes-enfermedad/antecedentes-enfermedad.component';
import { HistorialMedicoComponent } from './apps/historial-medico/historial-medico.component';
import { VariablesBiomedicasComponent } from './variables-biomedicas/variables-biomedicas.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MisWearablesComponent } from './apps/mis-wearables/mis-wearables.component';
import { AgregarWearableComponent } from './apps/agregar-wearable/agregar-wearable.component';
import { MisPronosticosComponent } from './mis-pronosticos/mis-pronosticos.component';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './charts/chart-js/chartjs.component';
import { DetalleVariableComponent } from './apps/detalle-variable/detalle-variable.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

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
        Glucosa2Component,
        DatosMedicosComponent,
        AntecedentesFamiliaresComponent,
        AntecedentesEnfermedadComponent,
        HistorialMedicoComponent,
        VariablesBiomedicasComponent,
        MisWearablesComponent,
        AgregarWearableComponent,
        MisPronosticosComponent,
        DetalleVariableComponent,
        GeneratePdfComponent

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
