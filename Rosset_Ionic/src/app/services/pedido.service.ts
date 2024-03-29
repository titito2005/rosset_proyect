import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, addDoc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { writeBatch, doc, getDoc } from "firebase/firestore";
import 'firebase/firestore';

import {Producto, UserData} from '../types/models';

import {Pedido} from 'src/app/types/models'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }

  pedidos: Pedido[];
  productos: Producto[];

  async getPedidos(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Pedido"));
    this.pedidos = [];
    if (querySnapshot!=null)
    {
      querySnapshot.forEach((doc) => {
        let pedido: Pedido = {
          id: doc.get("ID"),
          usuario: doc.get("Usuario"),
          direccion: doc.get("Direccion"),
          fecha: doc.get("Fecha"),
          estado: doc.get("Estado"),
          telefono: doc.get("Telefono"),
          productos: doc.get("Productos"),
          vendedor: doc.get("Vendedor")
        };
        this.pedidos.push(pedido as Pedido)
      });
      return this.pedidos;
    } else
    {
      return null;
    }
  }

  async getPedido(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"), where("ID", "==", Number(id)));
    const querySnapshot = await getDocs(q);
    let retorno: Pedido;
    querySnapshot.forEach((doc) => {
      let pedido: Pedido = {
        id: doc.get("ID"),
        usuario: doc.get("Usuario"),
        direccion: doc.get("Direccion"),
        estado: doc.get("Estado"),
        fecha: doc.get("Fecha"),
        telefono: doc.get("Telefono"),
        productos: doc.get("Productos"),
        vendedor: doc.get("Vendedor")
      }
      retorno = pedido;
    });

    return retorno;
  }

  async getProductosPorId(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }

  async getCantidadProductos(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }

  async getCantidadPedidos(){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }

  async eliminarProductos(pedido: Pedido){
    const db = getFirestore();
    await deleteDoc(doc(db, "Pedido", pedido.id.toString()));
  }

  async actualizarPedido(pedido: Pedido){
    const db = getFirestore();
    await updateDoc(doc(db, "Pedido", pedido.id.toString()),{
      Fecha: pedido.fecha,
      Usuario: pedido.usuario,
      Vendedor: pedido.vendedor,
      Telefono: pedido.telefono,
      Direccion: pedido.direccion
    })
  }

  async agregarPedido(pedido: Pedido){
    const db = getFirestore();
    const id = new Date().getTime().toString();
    await setDoc(doc(db, "Pedido", id),{
      ID: Number(id),
      Direccion: pedido.direccion,
      Estado: pedido.estado,
      Fecha: pedido.fecha,
      Productos: pedido.productos,
      Telefono: pedido.telefono,
      Usuario: pedido.usuario,
      Vendedor: pedido.vendedor
    });
  }
}
