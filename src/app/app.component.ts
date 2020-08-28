import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab4App';

  public edadUno:number;
  public edadDos:number;
  public promedio:number;
  public suma:number;

  Calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = (this.suma)/2;
  }

  Limpiar(){
    this.edadUno = null;
    this.edadDos = null;
    this.promedio = null;
    this.suma = null;
  }
}
