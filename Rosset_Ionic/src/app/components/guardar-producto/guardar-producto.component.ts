import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { GuardarProductoService } from 'src/app/services/guardar-producto.service';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.scss'],
})
export class GuardarProductoComponent implements OnInit {

  constructor(private guardarService: GuardarProductoService,private modalController: ModalController) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
      this.guardarService.onSubmit(form);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}