import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export abstract class AbstractService {
    protected http: HttpClient;

    abstract route(): string;

    constructor(_httpClient: HttpClient ) { 
        this.http = _httpClient;
    }
    
    get httpClient(): HttpClient {
        return this.http;
    }

    get baseUrl(): string {
        return `${environment.server_URL}/api`;
    }

}