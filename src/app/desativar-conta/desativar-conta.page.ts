import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-desativar-conta',
  templateUrl: './desativar-conta.page.html',
  styleUrls: ['./desativar-conta.page.scss'],
})
export class DesativarContaPage {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  async confirmDeactivation() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem a certeza que quer desativar a sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Sim',
          cssClass: 'danger',
          handler: async () => {
            await this.deactivateAccount();
          }
        }
      ]
    });

    await alert.present();
  }

  async deactivateAccount() {
    try {
      const user = await this.authService.getCurrentUser();
      if (user) {
        await user.delete();
        this.showToast('Conta desativada com sucesso.');
        this.router.navigate(['/entrar']);
      }
    } catch (error) {
      this.showToast('Erro ao desativar a conta. Por favor, tente novamente.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
