import { Component, OnInit, Input } from '@angular/core';
import {Tela} from 'src/app/types/models';
import {InventarioService} from 'src/app/services/inventario.service';
import {ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.scss'],
})
export class VerInventarioComponent implements OnInit {
  @Input() tela: Tela;
  link: string;
  nombre: string;
  cantidad: number;
  constructor(
    private modalController: ModalController,
    private inventarioService: InventarioService,
    private loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    this.link = this.tela.foto;
    this.nombre = this.tela.nombre;
    this.cantidad = this.tela.cantidad;
  }

  closeModal_NotSafe() {
    this.tela.nombre = this.nombre;
    this.tela.cantidad = this.cantidad;
    this.tela.foto = this.link;
    this.modalController.dismiss();
  }

  closeModal_Safe() {
    this.modalController.dismiss();
  }

  onSubmit(form: NgForm) {
    this.inventarioService.updateTela(this.tela);
    this.closeModal_Safe();
  }

  deleteTela(tela: Tela) {
    this.inventarioService.deleteTela(this.tela);
    this.closeModal_Safe();
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
      this.tela.foto = res;
    });
    this.dismissLoader();
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
