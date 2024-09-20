import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoseditPageRoutingModule } from './autosedit-routing.module';

import { AutoseditPage } from './autosedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoseditPageRoutingModule
  ],
  declarations: [AutoseditPage]
})
export class AutoseditPageModule {}
