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
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: UserData[] = [];
  datos: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) {}

  async ngOnInit() {
    const querySnapshot = await this.userService.getUsers();
    var contador = 0;
    querySnapshot.forEach((doc) => {
      let user: UserData = {
        nombre: doc.get("Nombre"),
        tipo: doc.get("Tipo"),
        contrasenna: doc.get("Contraseña"),
      };
      this.users[contador]=user;
      contador++;
    });
    this.datos = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const user = form.value.username;
    const password = form.value.password;

    this.loadingController
      .create({
        message: 'Por favor espere...'
      })
      .then((res) => {
        res.present();

        this.userService
          .performLoginAsync(user, password)
          .then((userData) => {
            this.loadingController.dismiss();
            if (userData) {
              form.reset();
              console.log({userData});
              this.router.navigate(['/home']);
            } else {
              // toastController => mensajitos de abajo
              this.toastController
                .create({
                  header: 'Error',
                  message: 'Credenciales incorrectos',
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
