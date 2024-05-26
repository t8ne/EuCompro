import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage {
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

  async login() {
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
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/tabs/tab1']);
    } catch (error: any) {
      this.handleAuthError(error);
    }
  }

  handleAuthError(error: any) {
    if (this.isFirebaseAuthError(error)) {
      switch (error.code) {
        case 'auth/user-not-found':
          this.emailError = true;
          this.emailErrorMessage = 'Email não registado.';
          this.clearPasswordForm();
          break;
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          this.passwordError = true;
          this.passwordErrorMessage = 'Palavra-passe incorreta.';
          this.clearPasswordForm();
          break;
        case 'auth/invalid-email':
          this.emailError = true;
          this.emailErrorMessage = 'Formato de Email não reconhecido.';
          this.clearPasswordForm();
          break;
        default:
          this.showToast('Erro ao fazer login. Por favor, tente novamente.');
      }
    } else {
      this.showToast('Erro ao fazer login. Por favor, tente novamente.');
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
