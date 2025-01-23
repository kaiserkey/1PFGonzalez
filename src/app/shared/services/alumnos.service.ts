import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importación de 'of' para devolver datos en Observable

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 20 },
    { id: 2, nombre: 'María', apellido: 'Gómez', edad: 22 },
    { id: 3, nombre: 'Pedro', apellido: 'García', edad: 21 },
    { id: 4, nombre: 'Ana', apellido: 'Martínez', edad: 23 },
    { id: 5, nombre: 'Matías', apellido: 'Lopez', edad: 23 },
    { id: 6, nombre: 'Juan', apellido: 'Perez', edad: 20 },
    { id: 7, nombre: 'María', apellido: 'Gomez', edad: 22 },
    { id: 8, nombre: 'Pedro', apellido: 'Garcia', edad: 21 },
    { id: 9, nombre: 'Ana', apellido: 'Martinez', edad: 23 },
    { id: 10, nombre: 'Matias', apellido: 'Lopez', edad: 23 },
    { id: 11, nombre: 'Juan', apellido: 'Perez', edad: 20 },
    { id: 12, nombre: 'María', apellido: 'Gomez', edad: 22 },
    { id: 13, nombre: 'Pedro', apellido: 'Garcia', edad: 21 },
    { id: 14, nombre: 'Ana', apellido: 'Martinez', edad: 23 },
    { id: 15, nombre: 'Matias', apellido: 'Lopez', edad: 23 },
    { id: 16, nombre: 'Juan', apellido: 'Perez', edad: 20 },
    { id: 17, nombre: 'María', apellido: 'Gomez', edad: 22 },
    { id: 18, nombre: 'Pedro', apellido: 'Garcia', edad: 21 },
    { id: 19, nombre: 'Ana', apellido: 'Martinez', edad: 23 },
  ];

  getAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }
}
