import {Component, OnInit } from '@angular/core';
import {InventarioService} from 'src/app/services/inventario.service';
import {Tela} from 'src/app/types/models'
import {Photo} from 'src/app/types/models'
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-guardar-tela',
  templateUrl: './guardar-tela.page.html',
  styleUrls: ['./guardar-tela.page.scss'],
})
export class GuardarTelaPage implements OnInit {
  photo: string;
  photoWebviewPath: string;
  constructor(
    private inventarioService: InventarioService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private platform: Platform,
    ) { }

  async ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.inventarioService.agregarTela(form);
    form.reset()
    this.navigate();
  }

  async onPickImage() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photo = capturedPhoto.webPath;
  }

  navigate(){
    this.router.navigate(["/inventario"]);
  }
}
