import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  loginData = {
    "username" : '',
    "email" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  usuarios() {
    this.router.navigate(['listarUsuario']);
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      this.snack.open('El email es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

  }

}
