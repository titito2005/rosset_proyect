import { Component, OnInit, Input } from '@angular/core';
import {Tela} from 'src/app/types/models';
import {InventarioService} from 'src/app/services/inventario.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.scss'],
})
export class VerInventarioComponent implements OnInit {
  @Input() tela: Tela;
  constructor(
    private modalController: ModalController,
    private inventarioService: InventarioService,
  ) { }

  async ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
