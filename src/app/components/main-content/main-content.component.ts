import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../services/order.service'; // Asegúrate de importar tanto el servicio como la interfaz

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  // Define `orders` como un arreglo del tipo `Order`
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Cargar las órdenes usando el servicio
    this.orders = this.orderService.getOrders();
  }
}
