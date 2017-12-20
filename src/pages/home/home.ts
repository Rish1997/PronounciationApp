import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputSpeech: String;

  constructor(private speechRecognition: SpeechRecognition, private tts: TextToSpeech, public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.speechRecognition.requestPermission()
      .then(
      (value : any) => alert(value),
      (reason : any) => alert(reason)
      )

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => alert(hasPermission))

    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => alert(available))
      .catch((reason: any) => alert(reason));
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

    this.speechRecognition.startListening()
      .subscribe(
      (matches: Array<string>) => { 
        for(let i of matches){ 
          this.inputSpeech += i + " ";
        }
      },
      (onerror) => console.log('error:', onerror)
      )

  }

  stopListening() {

    this.speechRecognition.stopListening();

  }

}
