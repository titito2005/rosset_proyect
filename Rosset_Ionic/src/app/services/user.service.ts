import {EventEmitter, Injectable} from '@angular/core';
import {UserData} from '../types/models';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userStatusChange: any = new EventEmitter<any>();
  public isLoggedIn = false;

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() {
  }

  performLogin(user: UserData, password: string): UserData {
    if (user.contrasenna == password) {
      this.isLoggedIn = true;
      this.userStatusChange.emit(user);
      return user;
    } else {
      return null;
    }
  }

  performLoginAsync(user: UserData, password: string): Promise<UserData> {
    const timeout = 100;
    return new Promise((resolve) =>
      setTimeout(() => {
        const result = this.performLogin(user, password);
        return resolve(result);
      }, timeout)
    );
  }

  performLogout(): void {
    this.isLoggedIn = false;
    this.userStatusChange.emit(null);
  }

  async getUsers()
  {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Usuario"));
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }
}

