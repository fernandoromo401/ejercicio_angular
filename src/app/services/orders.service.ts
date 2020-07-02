import { Injectable } from '@angular/core';
import { orders } from "./mock.data";
import { Orders } from '../class/orders.class';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  constructor() { }

  getAll(): Promise<any> {
    return Promise.resolve(orders);
  }
  getById(id: number): Promise<Orders> {
    return Promise.resolve(orders.find((order) => order.id == id));
  }
  delete(id: number): Promise<Orders[]> {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].id == id) {
        orders.splice(i, 1)
        return Promise.resolve(orders)
      }
    }
  }
  save(order) {
    order.id = orders.length + 1
    return Promise.resolve(orders.push(order))
  }

  update(order) {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].id == order.id) {
        orders[i] = order
        return Promise.resolve(orders)
      }
    }
  }
}
