import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.estg.eucompro',
  appName: 'EuCompro',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    StatusBar: {
      style: 'DARK',
    },
    ScreenOrientation: {
      orientation: 'portrait'
    },
    BarcodeScanner: {
      android: {
        enableBarcodeScanner: true,
      },
      ios: {
        enableBarcodeScanner: true,
      }
    }
  },
};

export default config;
