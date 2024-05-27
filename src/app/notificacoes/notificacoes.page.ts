import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {
  notificacoes: any[] = [];

  constructor(private listService: ListService) {}

  async ngOnInit() {
    this.notificacoes = await this.listService.getNotificacoes();
  }
}
