import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})
export class CompradorComponent implements OnInit {

  public user = {
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    telefono: '',
    direccion: '',
    correo: '',
    tipo_persona:''
  }


  constructor(private snack: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }


  formSubmit() {
    // console.log(this.user);
    if (this.user.primer_nombre == '' || this.user.primer_nombre == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.segundo_nombre == '' || this.user.segundo_nombre == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.primer_apellido == '' || this.user.primer_apellido == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.segundo_apellido == '' || this.user.segundo_apellido == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.telefono == '' || this.user.telefono == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.direccion == '' || this.user.direccion == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    if (this.user.correo == '' || this.user.correo == null) {
      this.snack.open('Este campo es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    //Conexion Backend

  }

  exit() {
    if (this.user.primer_nombre == null||this.user.primer_nombre != null) {
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
