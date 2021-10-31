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
   shirt: boolean = false;
   pant: boolean = false;
   shirtStatus: number = 1;
   pantStatus: number = 1;
   productNumber : number = 1;
  constructor(private guardarService: GuardarProductoService,private modalController: ModalController) { }


  ngOnInit() {

  }




  onSubmit(form: NgForm) {

      this.guardarService.onSubmit(form,this.shirt,this.pant,this.shirtStatus,this.pantStatus,this.productNumber);
      form.reset()
      this.shirt = false;
      this.pant = false;
      this.shirtStatus = 1;
      this.pantStatus = 1;
      this.productNumber ++;
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
