import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Ejercicio1Component } from './componentes/ejercicio1/ejercicio1.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: BienvenidaComponent },
  {path:'ejercicio1', component: Ejercicio1Component},
  {path:'paises/listado', component: ControlEntidadComponent},
  // {path:'ejercicio1', component: ListadoEntidadComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
