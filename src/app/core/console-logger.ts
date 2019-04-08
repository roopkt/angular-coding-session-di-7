import { Injectable } from '@angular/core';

import { Logger } from './logger';

@Injectable({ providedIn: 'root' })
export class ConsoleLogger extends Logger {
  log(message: string) {
    console.log('Warning:', message);
  }

  logInfo(message: string) {
    console.log('Info:', message);
  }

  logDebug(message: string) {
    console.log('Debug:', message);
  }
}