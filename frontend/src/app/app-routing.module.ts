import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListarComponent } from './main/usuario/usuario-listar.component';

const routes: Routes = [
  { path: 'usuario-listar', component: UsuarioListarComponent },
  { path: 'usuario-cadastrar', component: UsuarioListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
