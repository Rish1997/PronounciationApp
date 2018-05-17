import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-word-type-options',
  templateUrl: 'word-type-options.html',
})
export class WordTypeOptionsPage {

  types : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.types = [{
      name : "Word"
    },{
      name : "Numbers"
    },{
      name : "Sentences"
    }];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordTypeOptionsPage');
  }

}
