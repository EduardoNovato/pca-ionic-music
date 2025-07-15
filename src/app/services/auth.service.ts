import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credentials: any){
    //[tarea]: si el login es exito guardar en el storage "login:true"
    return new Promise((accept, reject) =>{
      if (
        credentials.email == "andrea@gmail.com" &&
        credentials.password == "123456789"
      ){
        accept("login correcto")
      }else{
        reject("login incorrecto")
      }
    })
  }
}
