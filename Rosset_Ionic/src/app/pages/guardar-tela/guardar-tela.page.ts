import {Component, OnInit } from '@angular/core';
import {InventarioService} from 'src/app/services/inventario.service';
import {Tela} from 'src/app/types/models'
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardar-tela',
  templateUrl: './guardar-tela.page.html',
  styleUrls: ['./guardar-tela.page.scss'],
})
export class GuardarTelaPage implements OnInit {

  constructor(private inventarioService: InventarioService) { }

  async ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.inventarioService.agregarTela(form);
    form.reset()
  }
}
