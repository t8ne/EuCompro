import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesativarContaPageRoutingModule } from './desativar-conta-routing.module';

import { DesativarContaPage } from './desativar-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesativarContaPageRoutingModule
  ],
  declarations: [DesativarContaPage]
})
export class DesativarContaPageModule {}
