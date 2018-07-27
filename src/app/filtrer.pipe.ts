import { Pipe, PipeTransform } from '@angular/core';
import { Sondage } from './domains';

@Pipe({
  name: 'filtrer'
})
export class FiltrerPipe implements PipeTransform {

  transform(value, args) {
    if(args!=undefined) {
      return value.filter(sondage => sondage.titre.toLocaleLowerCase().includes(args.trim().toLocaleLowerCase()));
    } else {
      return value;
    }
  }
}