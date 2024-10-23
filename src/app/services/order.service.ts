import { Injectable } from '@angular/core';

// Exporta la interfaz para que esté disponible en otros archivos
export interface Order {
  productName: string;
  productNumber: string;
  paymentStatus: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  // Retorna una lista de objetos Order
  getOrders(): Order[] {
    return [
      {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending',
      },
      {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined',
      },
      {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active',
      },
    ];
  }
}
