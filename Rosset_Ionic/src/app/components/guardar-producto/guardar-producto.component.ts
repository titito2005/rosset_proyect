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
   shirtStatus: number = 0;
   pantStatus: number = 0;
   productNumber : number = 1;
   showCam: boolean = false;
   showPant: boolean = false;
  constructor(private guardarService: GuardarProductoService,private modalController: ModalController) { }


  ngOnInit() {

  }

  show(){
    if(this.shirt===false){
      this.showCam=false;
    }else if (this.shirt===true){
      this.showCam=true;
    }

    if(this.pant===false){
      this.showPant=false;
    }else if(this.pant===true){
      this.showPant=true;
    }
  }



  onSubmit(form: NgForm) {

      this.guardarService.submit(form,this.shirt,this.pant,this.shirtStatus,this.pantStatus,this.productNumber);
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
