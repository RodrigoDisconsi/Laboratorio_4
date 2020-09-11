import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './componentes/error/error.component';
import { Ejercicio1Component } from './componentes/ejercicio1/ejercicio1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatButtonModule, MatCheckboxModule, MatDatepicker, MatDatepickerModule, 
//   MatInputModule, MatRippleModule, MatFormFieldModule, MatNativeDateModule, MatMenuModule, 
//   MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule, MatSnackBarModule,
//   MatTooltipModule, MatProgressSpinnerModule, MatDialogModule, MatRadioModule, MatSelectModule, MatTableDataSource,
//   MatToolbarModule, MatCardModule
//  } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    ErrorComponent,
    Ejercicio1Component,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
