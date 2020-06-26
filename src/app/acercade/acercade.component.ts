import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  speech: any;
  datos: string = "Hola mundo, Hola mundo";

  constructor() {
    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      // returns a boolean
      console.log('speech synthesis supported');
      this.speech.init({
          volume: 1,
          lang: 'es-MX',
          rate: 1,
          pitch: 1,
          voice: 'Microsoft Sabina Desktop - Spanish (Mexico)',
          splitSentences: true
        });
        
    }
  }

  ngOnInit(): void {
  }

  start(){
    console.log(this.datos);
    this.speech.speak({ 
      text: this.datos,
    });
  }

  pause(){
    this.speech.pause();
    console.log("f");
  }

  resume(){
    this.speech.resume();
    console.log("f1");
  }

  cancelar(){
    Speech.cancel();
    console.log("f3");
  }
}
