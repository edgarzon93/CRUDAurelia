import {  HttpClient } from "aurelia-http-client";
import { Car } from "model/cars";

export class home {
  message:string = "CRUD De Carros"
  url:string = "https://localhost:44394/api/Cars" 
  http:HttpClient = new HttpClient
  cars:Array<Car> = []
  new:Car = {}
  selectedId:number = 0;
  edit:boolean = false

  constructor(){}

  created():void {
    this.getCars()
  }

  async getCars(){
    this.cars = []
    try {
      let res = await this.http.get(this.url)
      if(res){
        let array:Array<Car> = JSON.parse(res.response)
        this.cars = array
      } 
    } catch (error) {
      console.log(error)
    }

  }

  async saveCar(){
    if(this.edit){
      try {
        let res = await this.http.put(this.url, this.new)
        if(res){
          this.getCars()
        }
      } catch (error) {
        console.log(error)
      }

    }else{
      try {
        let res = await this.http.post(this.url, this.new)
        if(res){
          this.getCars()
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  this.new = {}
  }

  editCar(car:Car){
    this.new = car
    this.edit = true
  }

  clear(){
    this.new = {}
    this.edit = false
  }

  async deleteCar(id:string){
    console.log(id)
    let res = confirm("Desea eliminar el carro")
    if(res){
      try {
        let res = await this.http.delete(`${this.url}/${id}`)
      if(res){
        this.getCars()
      }
      } catch (error) {
        console.log(error)
      }
    }

  }
}
