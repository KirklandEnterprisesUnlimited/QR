import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QR';
  firebaseConfig = {
    apiKey: "AIzaSyCB047MRag3zpuhK6IPlOBTBEJnX7FTTc0",
    authDomain: "vcard-keu.firebaseapp.com",
    projectId: "vcard-keu",
    storageBucket: "vcard-keu.appspot.com",
    messagingSenderId: "1068501198675",
    appId: "1:1068501198675:web:af65a1d3eb0055f77f63a6",
    measurementId: "G-Z8KVQWSRQ5"
  };

  ngOnInit() {
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
