/* globals App */
/* eslint-disable quote-props */

App.info({
  name: 'Stock Helper',
  description: 'An application to help you with all of your stock needs.',
  author: 'Keevan Dance',
  email: 'keevandance@gmail.com',
  website: 'http://keevan.dance',
  version: '1.0',
});

App.icons({
  // Android
  'android_mdpi': 'resources/icon/mipmap-mdpi/icon.png',
  'android_hdpi': 'resources/icon/mipmap-hdpi/icon.png',
  'android_xhdpi': 'resources/icon/mipmap-xhdpi/icon.png',
});

App.launchScreens({
  // Android
  'android_mdpi_portrait': 'resources/splash/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/splash/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/splash/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/splash/drawable-land-hdpi/screen.png',
  'android_xhdpi_portrait': 'resources/splash/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/splash/drawable-land-xhdpi/screen.png',
});

App.setPreference('Orientation', 'portrait');
