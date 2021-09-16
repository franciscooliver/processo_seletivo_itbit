import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastrarComponent } from './main/usuario/usuario-cadastrar.component';
import { UsuarioListarComponent } from './main/usuario/usuario-listar.component';
import { UsuarioRelatorioComponent } from './main/usuario/usuario-relatorio.component';

const routes: Routes = [
  { path: 'usuario-listar', component: UsuarioListarComponent },
  { path: 'usuario-cadastrar', component: UsuarioCadastrarComponent },
  { path: 'usuario-relatorio', component: UsuarioRelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
