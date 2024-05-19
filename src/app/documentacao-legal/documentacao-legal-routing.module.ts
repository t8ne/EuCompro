import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentacaoLegalPage } from './documentacao-legal.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentacaoLegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentacaoLegalPageRoutingModule {}
