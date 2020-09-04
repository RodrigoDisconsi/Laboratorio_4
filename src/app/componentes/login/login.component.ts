import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../clases/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User;


  constructor(private route: Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  login(){
    // console.log(this.user.nombre);
    if(this.user.nombre == "rdisconsi" && this.user.password == "123456"){
      this.route.navigateByUrl("/ejercicio1");
    }
    else{
      this.route.navigateByUrl("error");
    }
  }

}
