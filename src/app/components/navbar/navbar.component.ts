import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user: any = null;
  banderaResgistrar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡La sesion se cerrara!',
      icon: 'warning',
      confirmButtonColor: '#3d9970',
      showConfirmButton: true,
      showCancelButton: true,
      denyButtonText: `Don't save`,
      confirmButtonText: 'Ok',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  Registrar(): void {
    if (this.user == null || this.user == '') {
      this.banderaResgistrar = false;
    } else {
      if (this.user.authorities[0].authority == 'ADMIN') {
        this.banderaResgistrar = true;
      } else {
        this.banderaResgistrar = false;
      }
    }
  }
}
