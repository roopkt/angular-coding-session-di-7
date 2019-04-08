

import { InjectionToken } from '@angular/core';


import { Config } from './app-config'

export const BASE_API_URL = new
  InjectionToken<string>('orderApp.baseApiURl');

export const CONFIG = new
  InjectionToken<Config>('orderApp.config');


  export const VALIDATOR = new
  InjectionToken<Config>('orderApp.validator');