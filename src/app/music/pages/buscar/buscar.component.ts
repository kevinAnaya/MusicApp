import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import  Swal  from 'sweetalert2'

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
          this.artistas = artistas
          if(this.artistas.length <= 0){
            Swal.fire('error', `no se encontró artista relacionado al termino: ${this.termino}`, 'error')
          } 
        })
  }

  ngOnInit(): void {}

}
