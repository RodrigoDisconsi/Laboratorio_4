import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../clases/usuario';



@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() usuario: Usuario = new Usuario();
  @Output() usuarioABorrar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  usuarioBorrar(usuario){
    this.usuarioABorrar.emit(usuario);
  }

}
