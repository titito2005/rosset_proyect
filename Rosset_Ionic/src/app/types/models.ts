import { identifierModuleUrl } from "@angular/compiler";
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
}
