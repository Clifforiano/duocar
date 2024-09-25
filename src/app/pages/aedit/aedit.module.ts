import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeditPageRoutingModule } from './aedit-routing.module';

import { AeditPage } from './aedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AeditPageRoutingModule
  ],
  declarations: [AeditPage]
})
export class AeditPageModule {}
