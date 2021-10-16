import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import { UserData } from 'src/app/types/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

  irPedidos() {
    console.log("Pedidos");
  }

}
