import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import {Producto} from 'src/app/types/models';
import {Platform} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss'],
})

export class VerPedidoComponent implements OnInit {
  @Input() pedidoId: string;
  productos: Producto[] = [];
  datos: boolean = false;
  edicion: boolean = true;

  constructor(
    private modalController: ModalController,
    private pedidoService: PedidoService,
    //private platform: Platform
    ) {}

    async ngOnInit() {

    }

    closeModal() {
      this.modalController.dismiss();
    }

    onSubmit(form: NgForm){

    }
}
