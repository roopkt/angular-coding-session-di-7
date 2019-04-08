import { HttpClient } from '@angular/common/http';

import {
  ConsoleLogger
} from './console-logger';
import {
  HttpLogger
} from './http-logger';

import { Config } from './app-config'



export function loggerCreator(config: Config, $http: HttpClient ) {

  console.log('config', config)
  if (config.mode === 'dev') {
    return new ConsoleLogger();
  }
  else if (config.mode === 'prod') {
    return new HttpLogger($http, config)
  }

}