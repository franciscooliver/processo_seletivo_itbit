import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioRelatorioComponent } from './main/usuario/usuario-relatorio/usuario-relatorio.component';
import { UsuarioCadastrarComponent } from './main/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioListarComponent } from './main/usuario/usuario-listar/usuario-listar.component';

const routes: Routes = [
  { path: '**', component: AppComponent, outlet: 'initial-panel' },
  { path: 'usuario-listar', component: UsuarioListarComponent },
  { path: 'usuario-cadastrar', component: UsuarioCadastrarComponent },
  { path: 'usuario-relatorio', component: UsuarioRelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
