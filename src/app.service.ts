import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //Metodos para la logica de negocio
  //Logica de negocio es todo lo que hacemos para completar los procesos de nuestra aplicacion
  getHello(): string {
    const variable:string = "hola chicos";
    return variable;
  }
}
