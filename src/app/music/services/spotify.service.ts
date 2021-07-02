import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public url: string = 'https://api.spotify.com/v1/search?query=metallica&limit=20&type=artist';

  artistas: any[] = [];

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
    
  }

  getArtistas(){    
    let headers = new HttpHeaders({
      'authorization' : 'Bearer BQDAe1cDguIq1fVKQpTzZ-DRskcv1v9Bz4wxKJDdVTxr3M2LfD0zSJSVMluCnY_kUXuLiIpDkHLPLLoRtJU'
    })

    return this.http.get(this.url, { headers })
               .pipe(
                 map( (resp:any ) => {
                   this.artistas = resp.artists.items 
                   return this.artistas
                 })
               )
  }

}
