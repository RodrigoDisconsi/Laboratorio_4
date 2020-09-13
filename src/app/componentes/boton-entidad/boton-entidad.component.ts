import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() usuario:Usuario;
  @Output() usuarioseleccionado = new EventEmitter<any>();

  constructor() { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  borrarUsuario(){
    this.usuarioseleccionado.emit(this.usuario);
  }

  
}
