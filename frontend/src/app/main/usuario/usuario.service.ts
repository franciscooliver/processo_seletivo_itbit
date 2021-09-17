import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) { }

  buscar(): Observable<any> {
    return this.http.get('/api/usuarios');
  }

  sexos(): Observable<any> {
    return this.http.get('/api/sexo');
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post('/api/usuarios', usuario);
  }

  atualizar(usuario: Usuario): Observable<any> {
    const { usuarioId } = usuario
    delete usuario.usuarioId

    return this.http.put(`/api/usuarios/${usuarioId}`, usuario);
  }

  ativar(id: any, ativo: boolean): Observable<any> {
    return this.http.put(`api/usuarios/ativo/${id}`, { ativo });
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`api/usuarios/${id}`);
  }

  filtrar(filtros: any): Observable<any> {
    return this.http.get('/api/usuarios/filtro', {
      params: new HttpParams()
        .set('nome', filtros.nome)
        .set('ativo', filtros.ativo)
    });
  }
}
