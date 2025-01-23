import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./features/alumnos/alumnos.module').then(
            (m) => m.AlumnosModule
          ),
      },
      {
        path: 'clases',
        loadChildren: () =>
          import('./features/clases/clases.module').then((m) => m.ClasesModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./features/cursos/cursos.module').then((m) => m.CursosModule),
      },
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
