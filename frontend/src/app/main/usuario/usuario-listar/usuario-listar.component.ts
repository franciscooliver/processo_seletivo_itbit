import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../models/usuario';
import { dateBr } from '../../utils/date-format';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss'],
})
export class UsuarioListarComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'dataNascimento',
    'email',
    'sexo',
    'ativo',
  ];
  dataSource: MatTableDataSource<Usuario[]>;

  constructor(private _usuarioService: UsuarioService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this._usuarioService.buscar().subscribe((res) => {
      console.log(res);
      
      this.dataSource.data = res;
    });
  }

  data(data: string) {
    return dateBr(data);
  }
}
