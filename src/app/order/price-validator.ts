import { Injectable } from '@angular/core';

export abstract class Validator {
  abstract validate(val: number): boolean;
}
@Injectable({ providedIn: 'root' })
export class PriceValidator extends Validator {

  validate(val: number): boolean {
    return !isNaN(val)
  }
}
@Injectable({ providedIn: 'root' })
export class NumberValidator extends Validator {

  validate(val: number): boolean {
    return !isNaN(val)
  }
}