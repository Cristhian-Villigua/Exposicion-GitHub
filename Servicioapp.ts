import { CircleRepository } from "./Puerto";

// Servicio de aplicación
//En donde contiene la logica del negocio para calcular el área del círculo 
//donde se utiliza el puerto para guardar el resultado.
export class CircleService {
    private repository: CircleRepository;
  
    constructor(repository: CircleRepository) {
      this.repository = repository;
    }
  
    calculateArea(radius: number): void {
      const area = Math.PI * radius * radius;
      this.repository.saveArea(area);
    }
  }