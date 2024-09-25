import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarcorreoPageRoutingModule } from './cambiarcorreo-routing.module';

import { CambiarcorreoPage } from './cambiarcorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CambiarcorreoPageRoutingModule
  ],
  declarations: [CambiarcorreoPage]
})
export class CambiarcorreoPageModule {}
