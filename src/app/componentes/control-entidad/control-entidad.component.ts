import { Component, OnInit, Input } from '@angular/core';
import { MiservicioService } from '../../services/miservicio.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  public datos: any;
  public trajoDatos:boolean = false;
  public usuarioSeleccionado:any ;

  constructor(private miServ: MiservicioService) { }

  ngOnInit(): void {
    this.miServ.obtenerDatos().subscribe(datos => {
      this.datos = datos;
      this.trajoDatos = true;
    });
  }

  usuarioSelec(usuario){
    console.log(usuario);
    this.usuarioSeleccionado = usuario;
  }



}
