import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage {
  firstName: string = '';
  lastName: string = '';
  addressLine1: string = '';
  addressLine2: string = '';
  city: string = '';
  postalCode: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async submitProposal() {
    if (
      this.firstName &&
      this.lastName &&
      this.addressLine1 &&
      this.city &&
      this.postalCode
    ) {
      this.router.navigate(['/pedido']);
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
