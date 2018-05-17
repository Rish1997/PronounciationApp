import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class SaveWordsProvider {
  words: string[] = [];
  constructor(private storage: Storage) {

  }

  saveWord(word: string): Promise<any> {
    return this.storage.set(word, word);
  }

  getAllWord(): Promise<any> {
    return new Promise((resolve , reject) => {
      let returnData = [];
      this.storage.forEach((value , key , number) => {
        returnData.push(value); 
      }).then(()=>{
        resolve(returnData);
      })
    })
  }

}
