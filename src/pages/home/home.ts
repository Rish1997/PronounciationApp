import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputSpeech : String;

  constructor(private tts : TextToSpeech,public navCtrl: NavController) {

  }

  play(text){

    this.tts.speak(text).then(()=>{
      console.log("success");
    }).catch((reason : any)=>{
      console.log("Error");
      console.log(reason);
    })

  }

}
