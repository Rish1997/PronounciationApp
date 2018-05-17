import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordTypeOptionsPage } from './word-type-options';

@NgModule({
  declarations: [
    WordTypeOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(WordTypeOptionsPage),
  ],
})
export class WordTypeOptionsPageModule {}
