import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
  authDomain: "rosset-b07bc.firebaseapp.com",
  projectId: "rosset-b07bc",
});

const db = getFirestore();

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  constructor() { }
  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, "Usuario"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }
}
