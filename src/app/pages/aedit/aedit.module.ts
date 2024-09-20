import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeditPageRoutingModule } from './aedit-routing.module';

import { AeditPage } from './aedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AeditPageRoutingModule
  ],
  declarations: [AeditPage]
})
export class AeditPageModule {}
