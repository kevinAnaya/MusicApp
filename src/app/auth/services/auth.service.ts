import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
               localStorage.setItem('token', resp.token! );
               this._usuario = {
                 name: resp.name,
                 uid : resp.uid
               }
             }
           }),
           map( resp => resp.ok),
           catchError( err => of(err.error.msg))
         )
    
  }

  validarToken(){
    const url = `${this.baseUrl}/auth/renew`

    const headers = new HttpHeaders()
          .set('x-token', localStorage.getItem('token') || '' )

    return this.http.get<AuthResponse>(url, { headers } )
          .pipe(
            map( resp => {

              localStorage.setItem('token', resp.token! );
               this._usuario = {
                 name: resp.name,
                 uid : resp.uid
               }

              return resp.ok;
            }),
            catchError( err => of(false))
          )
  }

  logout(){
    localStorage.clear();
  }

  registro( name: string, email: string, password: string){

    const url = `${this.baseUrl}/auth/new`

    const body = { name, email, password}

    return this.http.post<AuthResponse>( url, body)
          .pipe(
            tap( resp => {
              if ( resp.ok ) {
                localStorage.setItem('token', resp.token! );
                this._usuario = {
                  name: resp.name,
                  uid: resp.uid
                }
              }
            }),
            map( resp => resp.ok),
            catchError( err => of(err.error.msg))
          )
      
  }



}
