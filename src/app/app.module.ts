import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { ClasesModule } from './features/clases/clases.module';
import { CursosModule } from './features/cursos/cursos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AlumnosModule,
    ClasesModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
