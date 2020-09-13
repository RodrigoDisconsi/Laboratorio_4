import { Component, OnInit, Input } from '@angular/core';
import { MiservicioService } from '../../services/miservicio.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  public datos: any;
  public trajoDatos:boolean = false;
  public usuarioSeleccionado:Usuario;
  public listaAux:any = [];

  constructor(private miServ: MiservicioService) { }

  ngOnInit(): void {
    this.miServ.obtenerDatos().subscribe(datos => {
      this.datos = datos;
      this.trajoDatos = true;
    });
  }

  usuarioSelec(usuario){
    this.usuarioSeleccionado = usuario;
    // console.log(this.usuarioSeleccionado);
  }

  borrarUsuario(usuario){
    if(this.listaAux.length == 0){
      this.listaAux = this.datos.filter(x => x.email != usuario.email);
    }
    else{
      this.listaAux.splice(this.listaAux.indexOf(usuario), 1);
    }
    console.log(this.listaAux);
  }


}
