import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FirePage } from '../pages/fire/fire';
import { NewsPage } from '../pages/news/news';
import { PerfilPage } from '../pages/perfil/perfil';
import { NoticePage } from '../pages/notice/notice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApisProvider } from '../providers/apis/apis';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDynmE3QxbH_Qeq4IRZKURrYUdWLhYF1dc",
  authDomain: "hackaton2018-220018.firebaseapp.com",
  databaseURL: "https://hackaton2018-220018.firebaseio.com",
  projectId: "hackaton2018-220018",
  storageBucket: "hackaton2018-220018.appspot.com",
  messagingSenderId: "249163217980"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirePage,
    NewsPage,
    NoticePage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NoticePage,
    FirePage,
    NewsPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApisProvider
  ]
})
export class AppModule {}
