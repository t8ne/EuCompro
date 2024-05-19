import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesativarContaPage } from './desativar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: DesativarContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesativarContaPageRoutingModule {}
