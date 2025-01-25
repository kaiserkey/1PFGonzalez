import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../shared/alumnos.service';

@Component({
  selector: 'app-abm-alumnos',
  standalone: false,
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css'],
})
export class AbmAlumnosComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.alumnoForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alumnoId = +id;
      const alumno = this.alumnosService.obtenerAlumnoPorId(this.alumnoId);
      if (alumno) {
        this.alumnoForm.patchValue({
          nombre: alumno.nombre,
          apellido: alumno.apellido,
          edad: alumno.edad,
        });
      }
    }
  }

  guardarAlumno() {
    const alumno = this.alumnoForm.value;

    if (this.alumnoId) {
      this.alumnosService.actualizarAlumno(this.alumnoId, alumno);
    } else {
      this.alumnosService.agregarAlumno(alumno);
    }

    this.router.navigate(['/']);
  }
}
