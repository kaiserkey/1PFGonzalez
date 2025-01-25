import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos.component';

const routes: Routes = [
  { path: '', redirectTo: '/alumnos/lista-alumnos', pathMatch: 'full' },
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
  },
  { path: 'editar-alumno/:id', component: AbmAlumnosComponent },
  { path: '**', redirectTo: '/alumnos/lista-alumnos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
