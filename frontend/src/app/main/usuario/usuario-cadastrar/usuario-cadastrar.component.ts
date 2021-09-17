import { ChangeDetectionStrategy } from '@angular/core/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Sexo } from '../../models/Sexo';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../usuario.service';
import { AlertService } from '../../services/alert.service';
import * as dayjs from 'dayjs';
dayjs.locale('br');

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.scss'],
})
export class UsuarioCadastrarComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  usuario: Usuario = {
    nome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    ativo: false,
  };
  sexosArr: Sexo[] = [];
  emEdicao = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private changeDetector: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _dialogRef: MatDialogRef<UsuarioCadastrarComponent>,
    private _alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (this.data.usuario) {
      this.usuario = this.data.usuario;
      this.emEdicao = true;
    }

    this.form = _formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      dataNascimento: [dayjs(), Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [''],
      sexoId: ['', Validators.required],
      ativo: true,
    });
  }

  ngOnInit(): void {
    this.sexos();
  }

  ngAfterViewInit(): void {
    setTimeout(
      () => (this.emEdicao ? this.popularFormComDadosUsuario() : null),
      0
    );
  }

  popularFormComDadosUsuario() {
    this.usuario.dataNascimento = dayjs(this.usuario.dataNascimento)
      .add(1, 'day')
      .format('YYYY-MM-DD');
    this.form.patchValue(this.usuario);
    this.form.get('ativo')?.setValue(this.usuario.ativo);
    this.form.get('sexoId')?.setValue(this.usuario.sexo?.sexoId);
    this.changeDetector.detectChanges();
  }

  sexos(): void {
    this._usuarioService.sexos().subscribe((sexos) => {
      this.sexosArr = sexos;
      !this.emEdicao
        ? this.form.get('sexoId')?.setValue(this.sexosArr[0].sexoId)
        : null;
      this.changeDetector.detectChanges();
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      this._snackBar.open('Dados inválidos', 'OK', {
        duration: 3000,
        panelClass: 'error-snackbar',
        verticalPosition: 'top',
      });
      this.form.markAsTouched();
      return;
    }

    const usuarioSalvar: Usuario = this.form.getRawValue();
    usuarioSalvar.dataNascimento = dayjs(
      this.form.get('dataNascimento')?.value
    ).format('YYYY-MM-DD');
    usuarioSalvar.ativo = this.emEdicao ? this.form.get('ativo')?.value : true;

    of(this.emEdicao)
      .pipe(
        switchMap((edicao) => {
          if (edicao) {
            usuarioSalvar.usuarioId = this.usuario.usuarioId;
            return this._usuarioService.atualizar(usuarioSalvar);
          }

          return this._usuarioService.salvar(usuarioSalvar);
        })
      )
      .subscribe((res) => {
        this._alertService.mostrarAlertaSucesso(
          this.emEdicao
            ? 'Usuário atualizado com sucesso'
            : 'Usuário cadastrado com sucesso'
        );

        if (this.emEdicao) this._dialogRef.close();

        this.form.reset({ onlySelf: true });
      });
  }
}
