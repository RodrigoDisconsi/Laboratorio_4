import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Ejercicio1Component } from './componentes/ejercicio1/ejercicio1.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: BienvenidaComponent },
  {path:'ejercicio1', component: Ejercicio1Component},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
