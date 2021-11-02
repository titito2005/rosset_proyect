import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { GuardarProductoService } from 'src/app/services/guardar-producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.scss'],
})

export class GuardarProductoComponent implements OnInit {
  @Input() auxId: string;
   shirt: boolean = false;
   pant: boolean = false;
   shirtStatus: number = 0;
   pantStatus: number = 0;
   productNumber : number = 1;
   showCam: boolean = true;
   showPant: boolean = true;
   id: string;
  constructor(private guardarService: GuardarProductoService,private modalController: ModalController,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /*
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });
    */
    console.log(this.auxId);
  }

  show(){
    if(this.shirt===false){
      this.showCam=true;
    }else if (this.shirt===true){
      this.showCam=false;
    }

    if(this.pant===false){
      this.showPant=true;
    }else if(this.pant===true){
      this.showPant=false;
    }
  }

  onSubmit(form: NgForm) {

      this.guardarService.submit(form,this.shirt,this.pant,this.shirtStatus,this.pantStatus,this.auxId);
      form.reset()
      this.showCam=true;
      this.showPant=true;
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
