import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  AlumnosService,
  Alumno,
} from '../../../../../src/app/shared/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
  standalone: false,
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource();

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit() {
    this.alumnosService.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
      this.dataSource.data = this.alumnos;
    });
  }
}
