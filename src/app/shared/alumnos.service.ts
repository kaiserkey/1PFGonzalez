import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnosSource = new BehaviorSubject<
    Array<{ id: number; nombre: string; apellido: string; edad: number }>
  >([
    { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 22 },
    { id: 2, nombre: 'Maria', apellido: 'Gomez', edad: 25 },
  ]);
  alumnos$ = this.alumnosSource.asObservable();

  //obtener el id actual dinámicamente
  private currentId = this.alumnosSource.value.length + 1;

  agregarAlumno(alumno: { nombre: string; apellido: string; edad: number }) {
    const nuevoAlumno = { ...alumno, id: this.currentId++ };
    const alumnosActualizados = [...this.alumnosSource.value, nuevoAlumno];
    this.alumnosSource.next(alumnosActualizados);
  }

  obtenerAlumnos() {
    return this.alumnosSource.value;
  }

  obtenerAlumnoPorId(id: number) {
    return this.alumnosSource.value.find((alumno) => alumno.id === id);
  }

  actualizarAlumno(
    id: number,
    datos: { nombre: string; apellido: string; edad: number }
  ) {
    const alumnosActualizados = this.alumnosSource.value.map((alumno) =>
      alumno.id === id ? { ...alumno, ...datos } : alumno
    );
    this.alumnosSource.next(alumnosActualizados);
  }

  eliminarAlumno(id: number) {
    const alumnosActualizados = this.alumnosSource.value.filter(
      (alumno) => alumno.id !== id
    );
    this.alumnosSource.next(alumnosActualizados);
  }
}
