import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lists: { name: string, items: string[] }[] = [
  ];

  constructor(private alertController: AlertController) {}

  async openNewListPrompt() {
    const alert = await this.alertController.create({
      header: 'Criar nova lista',
      inputs: [
        {
          name: 'listName',
          type: 'text',
          placeholder: 'Nome da lista'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'OK',
          handler: data => {
            this.addNewList(data.listName);
          }
        }
      ]
    });

    await alert.present();
  }

  addNewList(name: string) {
    if (name && name.trim() !== '') {
      this.lists.push({ name: name, items: [] });
    }
  }
}
