import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cambiarclave2PageRoutingModule } from './cambiarclave2-routing.module';

import { Cambiarclave2Page } from './cambiarclave2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cambiarclave2PageRoutingModule
  ],
  declarations: [Cambiarclave2Page]
})
export class Cambiarclave2PageModule {}
