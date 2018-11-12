import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  amount: number;
  email: string;
  phonenummber: string;


  constructor(public navCtrl: NavController, public iab: InAppBrowser) {

  }

  pay(){
    console.log(this.amount);
    const browser = this.iab.create('http://localhost/TxnTest.php');
    
    }
}
