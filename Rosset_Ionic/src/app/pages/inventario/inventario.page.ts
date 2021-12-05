import { Component, OnInit } from '@angular/core';
import {InventarioService} from 'src/app/services/inventario.service';
import {Tela} from 'src/app/types/models'

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  constructor(private inventarioService: InventarioService) { }
  listaInventario: Tela[] = [];

  async ngOnInit() {
    this.listaInventario = await this.inventarioService.getInventario();
  }
}
