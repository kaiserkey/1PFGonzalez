import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { NombreApellidoPipe } from '../shared/nombre-apellido.pipe';
import { HeaderSizeDirective } from '../shared/header-size.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    NombreApellidoPipe,
    HeaderSizeDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    MatTableModule,
  ],
})
export class AlumnosModule {}
