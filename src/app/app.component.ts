import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'post-firebase';
  constructor() {
    var config = {
      apiKey: "AIzaSyCmugXHRm33YEUqTa0PMV2nJrSwWLy3PfA",
      authDomain: "post-firebase-7cf10.firebaseapp.com",
      databaseURL: "https://post-firebase-7cf10.firebaseio.com",
      projectId: "post-firebase-7cf10",
      storageBucket: "post-firebase-7cf10.appspot.com",
      messagingSenderId: "917657893499"
    };
    firebase.initializeApp(config);
  }
}
