import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import { UserData } from 'src/app/types/models';
import {ModalController} from '@ionic/angular';
import { GuardarProductoComponent } from 'src/app/components/guardar-producto/guardar-producto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  async viewNote() {

    const modal = await this.modalController.create({
      component: GuardarProductoComponent,
      /*
      componentProps: {
        noteId
      }
      */
    });
    return await modal.present();
  }


}
