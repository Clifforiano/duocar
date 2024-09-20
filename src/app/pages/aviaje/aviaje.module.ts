import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AviajePageRoutingModule } from './aviaje-routing.module';

import { AviajePage } from './aviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AviajePageRoutingModule
  ],
  declarations: [AviajePage]
})
export class AviajePageModule {}
