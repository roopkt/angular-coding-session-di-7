import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LineItemComponent } from './line-item/line-item.component';

import { OrderComponent } from './order/order.component';
import { PriceValidator, NumberValidator } from './order/price-validator';
import {
  Logger, ConsoleLogger, HttpLogger, BASE_API_URL, MiniLogger, loggerCreator, CONFIG, VALIDATOR
} from './core';

// const config = (window as any).config || {
//   mode: 'dev',
//   baseApiUrl: ''
// };

const config = (window as any).config || {
  mode: 'prod',
  baseApiUrl: 'https://reqres.in/api/'
};



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, LineItemComponent, OrderComponent],
  bootstrap: [AppComponent],
  providers: [


    {
      provide: CONFIG,
      useValue: config
    },


    {
      provide: VALIDATOR,
      useClass: NumberValidator,
      multi:true
    },
    {
      provide: VALIDATOR,
      useClass: PriceValidator,
      multi:true
    },

    {
      provide: Logger,
      useFactory: loggerCreator,
      deps: [CONFIG, HttpClient]
    },

    {
      provide: MiniLogger,
      useExisting: Logger
    }

  ],

})
export class AppModule { }
