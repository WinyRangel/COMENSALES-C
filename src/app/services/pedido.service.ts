import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
   url = 'http://localhost:4000/api/pedidos'
  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any> {
    return this.http.get(this.url)
  }

  crearPedido(pedido : Pedido): Observable<any>{
    return this.http.post(this.url, pedido)
  }
}
