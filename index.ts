import { CircleRepositoryImpl } from "./Adaptador";
import { CircleController } from "./Controlador";
import { CircleService } from "./Servicioapp";


// Adaptador de salida (puede ser una base de datos, un servicio externo, etc.)
const circleRepository = new CircleRepositoryImpl();

// Crear instancias y realizar la llamada
const circleService = new CircleService(circleRepository);
const circleController = new CircleController(circleService);
circleController.handleCalculateArea(5);