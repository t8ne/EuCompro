import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  currentList: any;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {}

  ngOnInit() {
    const listId = this.route.snapshot.paramMap.get('id');
    if (listId) {
      this.currentList = this.listService.getListById(listId);
    }
  }

  openCamera() {
    // Implement QR Code scanning functionality
  }
}
