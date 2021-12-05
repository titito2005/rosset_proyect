import { identifierModuleUrl } from "@angular/compiler";
import { NumericValueAccessor } from "@ionic/angular";
import { PedidoService } from "../services/pedido.service";

export interface UserData {
  nombre: string;
  tipo: string;
  contrasenna: string;
}

export interface Pedido {
  id: string;
  usuario: string;
  direccion: string;
  estado: string;
  fecha: string;
  telefono: string;
  vendedor: string;
}

export interface Producto {
  camisa: boolean;
  cantidad: number;
  cuelloCam: number;
  detalles: string;
  estadoCam: number;
  estadoPant: number;
  estampado: string;
  largoPant: number;
  mangaCam: number;
  nombre: string;
  pantalon: boolean;
  pedido: number;
  precio: number;
  tallaCam: string;
  tallaPant: string;
  tela: number;
}
export interface Tela {
  id: number;
  foto: string;
  cantidad: number;
  nombre: string;
}
export interface Photo {
  filepath: string;
  webviewPath: string;
}
