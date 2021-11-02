import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProduccionService} from 'src/app/services/produccion.service';
import {Producto} from 'src/app/types/models';
import {Platform} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-producto-produccion',
  templateUrl: './producto-produccion.component.html',
  styleUrls: ['./producto-produccion.component.scss'],
})

export class ProductoProduccionComponent implements OnInit {
  @Input() producto: Producto;
  @Input() tipo: number;

  constructor(
    private modalController: ModalController,
    private produccionService: ProduccionService,
    ) {}

  ngOnInit() {
    console.log(this.producto.pedido);
    console.log(this.tipo);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
