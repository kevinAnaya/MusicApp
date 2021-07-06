import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  artistas: any[] = [];

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
    
  }

  getArtistas(termino:String){    

    let url = `https://api.spotify.com/v1/search?query=${termino}&limit=20&type=artist`;

    let headers = new HttpHeaders({
      'authorization' : 'Bearer BQDjtFl6jIQHscgxg8iMyQ35RToe7-ZenxfNCFtvhSlXRy-8rVajk5gsLSYtprbgSWB0jPXP5KqUBwHaE7c'
    })

    return this.http.get(url, { headers })
               .pipe(
                 map( (resp:any ) => {
                   this.artistas = resp.artists.items 
                   return this.artistas
                 }) 
               )
  }

}
