import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth-response';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: String = environment.baseUrl

  private _usuario!: Usuario

  get usuario(){
    return { ...this._usuario }
  }

  constructor(private http: HttpClient) { }


  login( email: string, password: string ){

    const url = `${this.baseUrl}/auth`

    const body = { email, password}

    return this.http.post<AuthResponse>(url, body)
         .pipe(
           tap( resp => {
             if ( resp.ok ) {
               this._usuario = {
                 name: resp.name,
                 uid : resp.uid
               }
             }
           }),
           map( resp => resp.ok),
           catchError( err => of(false))
         )
    
  }



}
