import { CircleService } from "./Servicioapp";

// Adaptador de entrada (controlador, API, etc.)
//Que actúa como un punto de entrada y llama al servicio de aplicación.
export class CircleController {
    private service: CircleService;
  
    constructor(service: CircleService) {
      this.service = service;
    }
  
    handleCalculateArea(radius: number): void {
      this.service.calculateArea(radius);
    }
  }