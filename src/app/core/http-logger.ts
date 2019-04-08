import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Logger } from './logger';
import { CONFIG } from './token';
import { Config } from './app-config';

@Injectable({ providedIn: 'root' })
export class HttpLogger extends Logger {
  constructor(
    private $http: HttpClient,
    @Inject(CONFIG) private config: Config
  ) {
    super();
    console.log('http logger initiated');
  }

  log(message: string) {
    this.logWithLevel(message, 'Warning');
  }

  logInfo(message: string) {
    this.logWithLevel(message, 'Info');
  }

  logDebug(message: string) {
    this.logWithLevel(message, 'Debug');
  }

  logWithLevel(message: string, level: string) {
    this.$http.post(this.logApiUrl, { message, level }).subscribe(
      s => console.log('logger server response', s)
    );
  }

  private get logApiUrl() {
    return `${this.config.baseApiUrl}log`;

  }
}