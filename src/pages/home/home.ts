import { Component } from '@angular/core';
import { NavController, Platform , ModalController, PopoverController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { PractivePronouncePage } from './../practive-pronounce/practive-pronounce';
import { WordTypeOptionsPage } from '../word-type-options/word-type-options';
import { SaveWordsProvider } from '../../providers/save-words/save-words';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputSpeech: String ="";
  pronounceButton : boolean = false;
  savedWords : string[] = [];

  constructor(private popCtrl : PopoverController, private modalCtrl : ModalController,private speechRecognition : SpeechRecognition, private platform: Platform, private tts: TextToSpeech, public navCtrl: NavController , public swPro : SaveWordsProvider) {
    
  }

  /**
   * 1. making pronounce button false -> means not to show pronounce button at beginning
   * 2. Checking for permissions
   * 3. showing words.
   */

  ionViewDidLoad() {

    this.pronounceButton = false;
    
    this.platform.ready().then(() => {
      this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      }).catch((reason : any) => {
        console.log(reason);
      })
    });

    this.showWords();

  }

  /**
   * 1. Changing the page where user can practive pronounciation
   */

  practiceIt(word){
    let modal = this.modalCtrl.create(PractivePronouncePage , {toPractice : word});
    modal.present();
  }

  /**
   * 1. Function fired when user hears the pronounciation of a word.
   * 2. Saving this word for further use.
   */

  play(text) {

    this.tts.speak(text).then(() => {
      console.log("success");
    }).catch((reason: any) => {
      console.log("Error");
      console.log(reason);
    });

    this.saveWord(text);
  }

  /**
   * 1. Changing input to usable format.
   * 2. Checking wheter any pronounciable word remains.
   */

  inputChanged(){
    if(this.inputSpeech.trim().length != 0 ){
      this.pronounceButton = true;
    }
    else{
      this.pronounceButton = false;
    }
  }

  /**
   * 1. Function to show the options when more option button is clicked.
   */

  showOptions(myEvent){
    let popover = this.popCtrl.create(WordTypeOptionsPage);
    popover.present({
      ev : myEvent
    });
    
  }

  /**
   * 1. Function used to take all the words and showing them.
   */

  showWords(){
    this.swPro.getAllWord().then((words) => {
      for(let word of words){
        this.savedWords.push(word);
      }
    })
  }

  /**
   * 1. Function used to save a word
   */

  saveWord(word : string){
    this.swPro.saveWord(word).then(() => {
      console.log("Success saving " + word);
    })
  }

  savedWordClicked(word){

  }
}