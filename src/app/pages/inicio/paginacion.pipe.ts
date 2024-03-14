import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'page'
})
export class paginacion implements PipeTransform {

  transform(value: any[], page: number=0): any []{

    return value.slice(page, (page + 6));
  }
}