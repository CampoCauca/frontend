import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(private router:Router ) {}
  crearUsuarios() {
    this.router.navigate(['usuario']);
  }
  ngOnInit(): void {
  }

}
