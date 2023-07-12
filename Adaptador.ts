import { CircleRepository } from "./Puerto";

// Adaptador
export class CircleRepositoryImpl implements CircleRepository {
//Aqui implementaremos el Puerto que vendria a ser nuestra interface
//que se se encarga de almacenar el área en una base de datos o cualquier otro medio de almacenamiento.
    saveArea(area: number): void {
      console.log(`Guardando el área ${area}`);
      // Lógica para guardar el área en una base de datos u otro medio de almacenamiento
    }
  }