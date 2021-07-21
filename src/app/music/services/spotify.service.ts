import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  artistas: any[] = [];

  token: string = 'BQCgroQaZ-ZFS9H22l_h4LDKSd_LUEintewdEFpvJngR44iRHYyCuBkUl8RlO2gYjMiQdHoBtJQXYSZ_w6E';

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
    
  }

  private getHeaders(): HttpHeaders{

    let headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    })
    return headers
  }

  getTracks( id : string ){

    let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders()

    return this.http.get(url , { headers })

  }

  getArtistaPorId( id: string){
    let url = `https://api.spotify.com/v1/artists/${id}` 

    let headers = this.getHeaders()

    return this.http.get(url, { headers })

  }

  getArtistas(termino:String){    

    let url = `https://api.spotify.com/v1/search?query=${termino}&limit=20&type=artist`;

    let headers = this.getHeaders()

    return this.http.get(url, { headers })
               .pipe(
                 map( (resp:any ) => {
                   this.artistas = resp.artists.items 
                   return this.artistas
                 }) 
               )
  }

}
