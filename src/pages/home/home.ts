import { Component } from '@angular/core';
import { NavController, Platform , ModalController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { PractivePronouncePage } from './../practive-pronounce/practive-pronounce';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputSpeech: String ="";
  pronounceButton : boolean = false;

  constructor(private modalCtrl : ModalController,private speechRecognition : SpeechRecognition, private platform: Platform, private tts: TextToSpeech, public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.pronounceButton = false;
    
    this.platform.ready().then(() => {
      this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      }).catch((reason : any) => {
        alert(reason);
      })
    });

  }

  practiceIt(word){
    let modal = this.modalCtrl.create(PractivePronouncePage , {toPractice : word});
    modal.present();
  }

  play(text) {

    this.tts.speak(text).then(() => {
      console.log("success");
    }).catch((reason: any) => {
      console.log("Error");
      console.log(reason);
    })
  }

  inputChanged(){
    if(this.inputSpeech.trim().length != 0 ){
      this.pronounceButton = true;
    }
    else{
      this.pronounceButton = false;
    }
  }
}