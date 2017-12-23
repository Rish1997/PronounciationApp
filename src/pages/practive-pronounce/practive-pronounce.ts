import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-practive-pronounce',
  templateUrl: 'practive-pronounce.html',
})
export class PractivePronouncePage {
  word : String;
  matches: String[];
  matchLenShow : boolean = false;
  isRecording = false;
  isPerfectPronounciation : boolean = false;

  constructor(public viewCtrl : ViewController,public cd : ChangeDetectorRef,public speechRecognition : SpeechRecognition, public navCtrl: NavController, public navParams: NavParams) {
    this.word = this.navParams.get('toPractice');
  }

  ionViewDidLoad() {
    this.isPerfectPronounciation = false;
  }

  startListening() {
    let options = {
      language: 'en-US'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      if(this.matches.length != 0){
        this.matchLenShow = true;
      }
      else{
        this.matchLenShow = false;
      }
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }
  
  compareIt(match){

    if(match.toUpperCase() == this.word.toUpperCase()){
      document.getElementById('navBar').style.color = "Yellow";
      alert("Perfectly Matched");
      this.isPerfectPronounciation = true;
      this.viewCtrl.dismiss();
    }
    else{
      alert("Try to pronounce Again");
    }

  }

}
