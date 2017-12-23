import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputSpeech: String;
  speechRecognition: any;
  constructor(private platform: Platform, private tts: TextToSpeech, public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.platform.ready().then(() => {

    });

  }

  play(text) {

    this.tts.speak(text).then(() => {
      console.log("success");
    }).catch((reason: any) => {
      console.log("Error");
      console.log(reason);
    })

  }

  startListening() {


  }

  stopListening() {


  }

}