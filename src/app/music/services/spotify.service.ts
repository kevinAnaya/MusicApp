import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public url: string = 'https://api.spotify.com/v1/search?query=metallica&limit=20&type=artist';

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
    
  }

  getArtistas(){    
    return this.http.get(this.url)
  }

}
