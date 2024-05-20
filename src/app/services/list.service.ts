import { Injectable } from '@angular/core';

interface Item {
  name: string;
  quantity: number;
}

interface List {
  id: string;
  name: string;
  items: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private lists: List[] = [
  ];

  constructor() {}

  getLists(): List[] {
    return this.lists;
  }

  getListById(id: string): List | undefined {
    return this.lists.find(list => list.id === id);
  }

  createList(name: string): List {
    const newList: List = { id: (this.lists.length + 1).toString(), name, items: [] };
    this.lists.push(newList);
    return newList;
  }

  addItemToList(listId: string, item: Item): void {
    const list = this.getListById(listId);
    if (list) {
      list.items.push(item);
    }
  }

  removeItemFromList(listId: string, item: Item): void {
    const list = this.getListById(listId);
    if (list) {
      list.items = list.items.filter(i => i !== item);
    }
  }

  deleteList(id: string): void {
    this.lists = this.lists.filter(list => list.id !== id);
  }

  renameList(id: string, newName: string): void {
    const list = this.getListById(id);
    if (list) {
      list.name = newName;
    }
  }

  updateLists(updatedLists: List[]): void {
    this.lists = updatedLists;
  }
}
