import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { GuardarProductoService } from 'src/app/services/guardar-producto.service';
let pant;


@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.scss'],
})

export class GuardarProductoComponent implements OnInit {
   shirt: boolean;
   pant: boolean;
  constructor(private guardarService: GuardarProductoService,private modalController: ModalController) { }


  ngOnInit() {

  }




  onSubmit(form: NgForm) {

      this.guardarService.onSubmit(form,this.shirt,this.pant);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
