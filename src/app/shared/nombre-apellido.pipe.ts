import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido',
  standalone: false,
})
export class NombreApellidoPipe implements PipeTransform {
  transform(value: any): string {
    return `${value.nombre} ${value.apellido}`;
  }
}
