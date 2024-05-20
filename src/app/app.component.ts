import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Hide the splash screen
    SplashScreen.hide();

    // Check if the platform is native (iOS or Android)
    if (Capacitor.isNativePlatform()) {
      // Set the status bar style
      StatusBar.setStyle({ style: Style.Light });
    }
  }
}
