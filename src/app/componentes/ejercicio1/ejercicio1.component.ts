import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../services/miservicio.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  public edadUno:number;
  public edadDos:number;
  public promedio:number = null;
  public suma:number = null;
  constructor(private miservicio:MiservicioService) { }

  ngOnInit(): void {
    console.log(this.miservicio.usuario);
    console.log(window.localStorage.getItem("user"));
  }


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
