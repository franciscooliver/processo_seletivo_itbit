import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateTime } from 'luxon';
import { Sexo } from '../models/Sexo';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.scss']
})
export class UsuarioCadastrarComponent implements OnInit {
  form: FormGroup;
  sexosArr: Sexo[] = [];

  constructor(private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private changeDetector: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {
    this.form = _formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      dataNascimento: [DateTime.now().setLocale('pt-BR').toFormat('yyyy-MM-dd'), Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: [''],
      sexoId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.sexos()
  }

  sexos() {
    this._usuarioService.sexos().subscribe(sexos => {
      this.sexosArr = sexos
      this.form.get('sexoId')?.setValue(this.sexosArr[0].sexoId)
      this.changeDetector.detectChanges()
    })
  }

  salvar() {

    if (this.form.invalid) {
      this._snackBar.open('Dados inválidos', 'OK', {
        duration: 3000,
        panelClass: 'error-snackbar',
        verticalPosition: 'top',
      })
      this.form.markAsTouched()
      return
    }

    const novoUsuario: Usuario = this.form.getRawValue()
    novoUsuario.dataNascimento = DateTime.fromISO(this.form.get('dataNascimento')?.value).toFormat('yyyy-MM-dd')
    novoUsuario.ativo = true

    this._usuarioService.salvar(novoUsuario)
      .subscribe(res => {
        this._snackBar.open('Usuário cadastrado com sucesso', 'OK', {
          duration: 3000
        })
        console.log(res)
      })
  }

}
