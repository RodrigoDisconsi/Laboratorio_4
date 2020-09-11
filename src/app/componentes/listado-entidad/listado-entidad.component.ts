import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  
  @Input() listadoDatos: any;
  @Output() usuarioseleccionado = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.listadoDatos);
  }

  mostrarDetalles(usuario){
    console.log(usuario);
    // console.log("HOLAA");
    // this.usuarioseleccionado.emit(usuario);
  }

}
