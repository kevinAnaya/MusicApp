import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista:any = {}

  constructor( private activatedRoute: ActivatedRoute,
               private _spotyService: SpotifyService) { }

  ngOnInit(): void {

    this.activatedRoute.params 
        .pipe(
          switchMap( ({id}) => this._spotyService.getArtistaPorId(id) )
        )
        .subscribe( artista => {
          this.artista = artista
          console.log(this.artista)
        })
  }

}
