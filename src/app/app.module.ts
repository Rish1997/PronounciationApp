import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PractivePronouncePage } from './../pages/practive-pronounce/practive-pronounce';
import { WordTypeOptionsPage } from './../pages/word-type-options/word-type-options';

import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SaveWordsProvider } from '../providers/save-words/save-words';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PractivePronouncePage,
    WordTypeOptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PractivePronouncePage,
    WordTypeOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    SaveWordsProvider
  ]
})
export class AppModule {}
