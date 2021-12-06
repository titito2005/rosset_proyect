import { Component, OnInit } from '@angular/core';
import {InventarioService} from 'src/app/services/inventario.service';
import {Tela} from 'src/app/types/models'
import {ModalController} from '@ionic/angular';
import { VerInventarioComponent } from 'src/app/components/ver-inventario/ver-inventario.component';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  constructor(
    private inventarioService: InventarioService,
    public modalController: ModalController) { }
  listaInventario: Tela[] = [];

  async ngOnInit() {
    this.listaInventario = await this.inventarioService.getInventario();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 3000);
  }

  async viewTela(tela: Tela) {
    const modal = await this.modalController.create({
      component: VerInventarioComponent,
      componentProps: {
        tela
      }
    });
    return await modal.present();
  }
}
