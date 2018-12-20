import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-coach';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDjxONWLFFgDwgt_Z-66g9EGm7-QWe2C8Q",
      authDomain: "my-coach-f973a.firebaseapp.com"
    });
  }


}
