import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: String = '';

  artistas = [];


  constructor( private _spotyS: SpotifyService) {}

  buscarArtista(){

    if(!this.termino){
      return
    }
    
    this._spotyS.getArtistas(this.termino)
        .subscribe( artistas => {
          console.log(artistas)
          this.artistas = artistas
        })
  }

  ngOnInit(): void {}

}
