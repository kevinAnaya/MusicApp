import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusciRoutingModule } from './musci-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './pages/artist/artist.component';


@NgModule({
  declarations: [
  DashboardComponent,
  HomeComponent,
  BuscarComponent,
  SinfotoPipe,
  ArtistComponent
],
  imports: [
    CommonModule,
    MusciRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MusciModule { }
