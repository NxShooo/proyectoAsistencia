import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoProfesorQRPageRoutingModule } from './codigo-profesor-qr-routing.module';

import { CodigoProfesorQRPage } from './codigo-profesor-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoProfesorQRPageRoutingModule
  ],
  declarations: [CodigoProfesorQRPage]
})
export class CodigoProfesorQRPageModule {}
