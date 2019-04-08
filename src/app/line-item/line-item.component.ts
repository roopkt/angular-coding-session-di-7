import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';


import { LineItem, Logger, VALIDATOR } from '../core';
import { LineItemService } from './line-item.service';


@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  providers: [LineItemService]
})
export class LineItemComponent {

  constructor(
    private lineItemService: LineItemService,
    private logger: Logger,
    @Inject(VALIDATOR) private validators


  ) { }

  @Output()
  lineItemSaved = new EventEmitter<LineItem>();

  @Input()
  set lineItem(lineItem: LineItem) {
    this.logger.logDebug('received line Item');
    console.log('validators', this.validators);

    const isValidEntry = this.validators.filter(v => !v.validate(lineItem.price)).length;

    if (isValidEntry > 0) {
      console.log('price is invalid');
    }


    // const isValid = this.validators(lineItem.price);
    // console.log('price validation', isValid);



    this.lineItemService.lineItem = lineItem;
  }

  get lineItem() {
    return this.lineItemService.lineItem;
  }

  onSaved() {
    this.logger.logDebug('saving');
    this.lineItemService.saveLineItem(this.lineItem);
    this.lineItemSaved.emit(this.lineItemService.lineItem);
  }

  onCanceled() {
    this.lineItemService.restoreLineItem();
    this.logger.logDebug('restored')
  }
}