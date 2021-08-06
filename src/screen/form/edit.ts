import { Car } from 'model/cars';
import { Router, RouterConfiguration } from 'aurelia-router';

export class Form {
  new:Car = {}
  routeConfig:RouterConfiguration;
  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    console.log(params)
  }
  constructor(){ }

  saveCar(){

  }

  back(){

  }
}
