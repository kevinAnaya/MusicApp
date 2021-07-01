import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  constructor( private _spotyS: SpotifyService) {
   }

  ngOnInit(): void {
    this._spotyS.getArtistas()
        .subscribe( resp => {
          console.log(resp);
        })
  }

}
