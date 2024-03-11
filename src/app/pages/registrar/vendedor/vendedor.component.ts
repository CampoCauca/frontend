import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    identificacion: ''
  }


  constructor(private snack: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }


  formSubmit() {
    // console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.nombre == '' || this.user.nombre == null) {
      this.snack.open('El nombre es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.apellido == '' || this.user.apellido == null) {
      this.snack.open('El apellido es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.email == '' || this.user.email == null) {
      this.snack.open('El email es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.telefono == '' || this.user.telefono == null) {
      this.snack.open('El telefono es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.identificacion == '' || this.user.identificacion == null) {
      this.snack.open('La identificacion es requerida !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    //Conexion Backend

  }

  exit() {
    if (this.user.username == null||this.user.username != null) {
      Swal.fire({
        title: '¿Está seguro?',
        text: "¡Si no le diste en Registrar tu usuario no se creara!",
        icon: 'warning',
        confirmButtonColor: '#3d9970',
        showConfirmButton: true,
        showCancelButton: true,
        denyButtonText: `Don't save`,
        confirmButtonText: 'Ok',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "http://localhost:4200/login"
        }
      })
    }
  }
}
