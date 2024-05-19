import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentacaoLegalPageRoutingModule } from './documentacao-legal-routing.module';

import { DocumentacaoLegalPage } from './documentacao-legal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentacaoLegalPageRoutingModule
  ],
  declarations: [DocumentacaoLegalPage]
})
export class DocumentacaoLegalPageModule {}
