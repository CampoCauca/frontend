import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { VendedorComponent } from './pages/registrar/vendedor/vendedor.component';
import { CompradorComponent } from './pages/registrar/comprador/comprador.component';

const routes: Routes = [
 { path : '',
  component : InicioComponent,
  pathMatch : 'full'
  },
  {
  path : '*',
  component : InicioComponent,
  pathMatch : 'full'
  },
  {
    path : 'registarV',
    component : VendedorComponent,
    pathMatch : 'full'
  },
  {
    path : 'registarC',
    component : CompradorComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
