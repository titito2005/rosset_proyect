import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
  authDomain: "rosset-b07bc.firebaseapp.com",
  projectId: "rosset-b07bc",
});

const db = getFirestore();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, "Usuario"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
    console.log(password);

    // const result = this.userService.performLogin(email, password);
    // if (result) {
    //   this.router.navigate(['/list']);
    // } else {
    //   console.log('Error al hacer login');
    // }

    // LoadingController => animacion de espera
    this.loadingController
      .create({
        message: 'Por favor espere...'
      })
      .then((res) => {
        res.present();

        this.userService
          .performLoginAsync(email, password)
          .then((userData) => {
            this.loadingController.dismiss();
            if (userData) {
              form.reset();
              console.log({userData});
              this.router.navigate(['/list']);
            } else {
              // toastController => mensajitos de abajo
              this.toastController
                .create({
                  header: 'Error',
                  message: 'Usuario incorrecto',
                  position: 'bottom',
                  duration: 3000
                })
                .then((toast) => {
                  toast.present();
                });
            }
          })
          .catch((error) => {
            this.loadingController.dismiss();
            this.toastController
              .create({
                header: 'Error',
                message: error,
                position: 'bottom',
                duration: 3000
              })
              .then((toast) => {
                toast.present();
              });
          });
      });
  }
}
