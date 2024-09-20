import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuserPageRoutingModule } from './auser-routing.module';

import { AuserPage } from './auser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuserPageRoutingModule
  ],
  declarations: [AuserPage]
})
export class AuserPageModule {}
