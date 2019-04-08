import { Injectable } from '@angular/core';
import { LineItem } from './line-item';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class OrderService {

  dataFromServer = [
    new LineItem(1, 'pencile', 12, 2),
    new LineItem(2, 'eraser', 34, 4),
  ];

  private lineItemsSubject = new BehaviorSubject<LineItem[]>(this.dataFromServer);

  lineItems = this.lineItemsSubject.asObservable();

  constructor() {

  }

  getlineItemsSubject() {
    return this.lineItemsSubject;
  }

  saveLineItem(lineItem: LineItem) {
    console.log('previous Data', this.lineItemsSubject.value);

    const data = this.lineItemsSubject.value.map(s => s.id == lineItem.id ? lineItem : s);

    console.log('previous Data', data);

    this.lineItemsSubject.next(

      data
    )
  }

}