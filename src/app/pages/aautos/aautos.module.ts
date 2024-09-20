import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AautosPageRoutingModule } from './aautos-routing.module';

import { AautosPage } from './aautos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AautosPageRoutingModule
  ],
  declarations: [AautosPage]
})
export class AautosPageModule {}
