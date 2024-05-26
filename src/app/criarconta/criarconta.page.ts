import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarContaPage {
  name: string = '';
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async createAccount() {
    this.resetErrors();

    if (!this.email) {
      this.emailError = true;
      this.emailErrorMessage = 'Por favor digite um Email.';
      return;
    }

    if (!this.password) {
      this.passwordError = true;
      this.passwordErrorMessage = 'Palavra-passe não introduzida.';
      return;
    }

    try {
      const user = await this.authService.register(this.email, this.password);
      this.showToast('Conta criada com sucesso!');
      this.router.navigate(['/tabs/tab1']);
    } catch (error: any) {
      this.handleAuthError(error);
    }
  }

  handleAuthError(error: any) {
    if (this.isFirebaseAuthError(error)) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.emailError = true;
          this.emailErrorMessage = 'Email já registado.';
          this.clearPasswordForm();
          break;
        case 'auth/weak-password':
          this.passwordError = true;
          this.passwordErrorMessage = 'Palavra-passe menor do que 6 caracteres.';
          this.clearPasswordForm();
          break;
        case 'auth/invalid-email':
          this.emailError = true;
          this.emailErrorMessage = 'Formato de Email não reconhecido.';
          this.clearPasswordForm();
          break;
        default:
          this.showToast('Erro ao criar a conta. Por favor, tente novamente.');
      }
    } else {
      this.showToast('Erro ao criar a conta. Por favor, tente novamente.');
    }
  }

  resetErrors() {
    this.emailError = false;
    this.passwordError = false;
    this.emailErrorMessage = '';
    this.passwordErrorMessage = '';
  }

  clearPasswordForm() {
    this.password = '';
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  private isFirebaseAuthError(error: any): error is { code: string } {
    return typeof error === 'object' && error !== null && 'code' in error;
  }
}
