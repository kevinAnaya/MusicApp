import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusciRoutingModule } from './musci-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  DashboardComponent,
  HomeComponent,
  BuscarComponent
],
  imports: [
    CommonModule,
    MusciRoutingModule,
    SharedModule
  ]
})
export class MusciModule { }
