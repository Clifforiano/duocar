import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeaPageRoutingModule } from './homea-routing.module';

import { HomeaPage } from './homea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeaPageRoutingModule
  ],
  declarations: [HomeaPage]
})
export class HomeaPageModule {}
