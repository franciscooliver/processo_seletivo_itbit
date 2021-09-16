import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-relatorio',
  templateUrl: './usuario-relatorio.component.html',
  styleUrls: ['./usuario-relatorio.component.scss']
})
export class UsuarioRelatorioComponent implements OnInit {
  form: FormGroup;
  displayedColumns: string[] = [
    'nome',
    'dataNascimento',
    'email',
    'sexo',
    'ativo',
  ];

  dataSource: MatTableDataSource<Usuario[]>;

  constructor(private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService
  ) {
    this.form = _formBuilder.group({
      nome: [''],
      ativo: ['1']
    })

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

  }

  buscar() {
    this._usuarioService.filtrar({
      nome: this.form.get('nome')?.value,
      ativo: this.form.get('ativo')?.value == '1' ? true : false
    }).subscribe((res) => {
      this.dataSource.data = res
    });
  }

}
