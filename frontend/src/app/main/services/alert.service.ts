import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AlertService {
    constructor(private _snackBar: MatSnackBar) { }

    mostrarAlertaSucesso(text: string): void {
        this._snackBar.open(text, 'OK', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'success-snackbar'
        })
    }

}