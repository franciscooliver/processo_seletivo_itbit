import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../../services/alert.service';
import { Usuario } from '../../models/usuario';
import { UsuarioCadastrarComponent } from '../usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioService } from '../usuario.service';
import * as dayjs from 'dayjs';
import { dateBr } from '../../utils/date-format';
dayjs.locale('br');

@Component({
  selector: 'app-usuario-relatorio',
  templateUrl: './usuario-relatorio.component.html',
  styleUrls: ['./usuario-relatorio.component.scss'],
})
export class UsuarioRelatorioComponent implements OnInit {
  form: FormGroup;
  displayedColumns: string[] = [
    'nome',
    'dataNascimento',
    'email',
    'sexo',
    'ativo',
    'acao',
  ];

  dataSource: MatTableDataSource<Usuario[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    public _dialog: MatDialog,
    private _alertService: AlertService
  ) {
    this.form = _formBuilder.group({
      nome: [''],
      ativo: ['1'],
    });

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {}

  buscar() {
    this._usuarioService
      .filtrar({
        nome: this.form.get('nome')?.value,
        ativo: this.form.get('ativo')?.value,
      })
      .subscribe((res) => {
        this.dataSource.data = res;
      });
  }

  editar(usuario: Usuario) {
    const dialogRef = this._dialog.open(UsuarioCadastrarComponent, {
      width: '80vw',
      position: { top: '5%' },
      data: {
        usuario,
      },
    });

    dialogRef.afterClosed().subscribe(() => this.buscar());
  }

  ativar(usuario: Usuario) {
    this._usuarioService
      .ativar(usuario.usuarioId, !usuario.ativo)
      .subscribe(() => this.buscar());
  }

  deletar(id: number) {
    this._usuarioService.deletar(id).subscribe((res: any) => {
      if (res) {
        this.buscar();
        this._alertService.mostrarAlertaSucesso(res.mensagem);
      }
    });
  }

  data(data: string) {
    return dateBr(data);
  }
}
