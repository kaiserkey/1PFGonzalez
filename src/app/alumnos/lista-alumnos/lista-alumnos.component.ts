import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../shared/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  standalone: false,
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  displayedColumns = ['nombre', 'edad', 'acciones'];
  alumnos: Array<{
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
  }> = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit() {
    this.alumnosService.alumnos$.subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  eliminarAlumno(id: number) {
    this.alumnosService.eliminarAlumno(id);
  }
}
