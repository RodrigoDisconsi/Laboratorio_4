import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  
  @Input() listadoDatos: any;
  @Output() usuarioseleccionado = new EventEmitter<any>();


  constructor() { 
  }

  ngOnInit(): void {
    
  }

  mostrarDetalles(usuario){
    this.usuarioseleccionado.emit(usuario);
  }

}
