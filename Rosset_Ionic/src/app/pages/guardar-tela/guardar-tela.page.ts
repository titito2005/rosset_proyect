import {Component, OnInit } from '@angular/core';
import {InventarioService} from 'src/app/services/inventario.service';
import {NgForm} from '@angular/forms';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-guardar-tela',
  templateUrl: './guardar-tela.page.html',
  styleUrls: ['./guardar-tela.page.scss'],
})

export class GuardarTelaPage implements OnInit {
  photoWebviewPath: string;
  link: string;
  constructor(
    private inventarioService: InventarioService,
    private router: Router,
    private loadingController: LoadingController,
    ) { }

  async ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.inventarioService.agregarTela(form, this.link);
    form.reset()
    this.navigate();
  }

  async onPickImage() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 5
    });

    const rawData = atob(capturedPhoto.base64String);
    const bytes = new Array(rawData.length);
    for (let x = 0; x < rawData.length; x++) {
      bytes[x] = rawData.charCodeAt(x);
    }
    const arr = new Uint8Array(bytes);
    const blob = new Blob([arr], {type: 'image/png'});
    this.simpleLoader();
    await this.inventarioService.agregarFoto(blob).then(res=> {
      this.link = res;
    });
    this.dismissLoader();
  }

  navigate(){
    this.router.navigate(["/inventario"]);
  }

  // Simple loader
  async simpleLoader() {
    this.loadingController.create({
        message: 'Loading...'
    }).then((response) => {
        response.present();
    });
  }

  // Dismiss loader
  async dismissLoader() {
    this.loadingController.dismiss().then((response) => {
        console.log('Loader closed!', response);
    }).catch((err) => {
        console.log('Error occured : ', err);
    });
  }
}
