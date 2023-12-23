import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'wellness-homes',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
