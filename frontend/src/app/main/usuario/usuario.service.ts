import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { AbstractService } from '../services/abstract.service';

@Injectable({ providedIn: 'root' })
export class UsuarioService extends AbstractService{

  route(): string {
    return 'usuario';
  }

  buscar(): Observable<any> {
    console.log(`${this.baseUrl}/${this.route()}`);
    return this.http.get(`${this.baseUrl}/${this.route()}`);
  }

  sexos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sexo`);
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario`, usuario);
  }

  atualizar(usuario: Usuario): Observable<any> {
    const { usuarioId } = usuario
    delete usuario.usuarioId

    return this.http.put(`${this.baseUrl}/${this.route()}/${usuarioId}`, usuario);
  }

  ativar(id: any, ativo: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/${this.route()}/ativo/${id}`, { ativo });
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.route()}/${id}`);
  }

  filtrar(filtros: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.route()}/filtro`, {
      params: new HttpParams()
        .set('nome', filtros.nome)
        .set('ativo', filtros.ativo)
    });
  }
}
