import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Tem a certeza que quer sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sim',
          cssClass: 'danger',
          handler: () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/entrar']);
  }
}
