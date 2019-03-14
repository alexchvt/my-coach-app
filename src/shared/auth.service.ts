import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    currentUserType: string;

    constructor(private router: Router){}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/coaches']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
            }
        )
        .catch(
            error => console.log(error)
        );

    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    getCurrentUserType() {
      var usermail = firebase.auth().currentUser.email;
      switch(usermail.charAt(0)) {
        case 'a':{
          this.currentUserType = 'admin';
          break
        }
        case 'c':{
          this.currentUserType = 'coach';
          break
        }
        case 'l':{
          this.currentUserType = 'learner';
          break
        }
      }
      return this.currentUserType;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
      firebase.auth().signOut();
      this.token = null;
      this.router.navigate(['/signin']);
    }
}
