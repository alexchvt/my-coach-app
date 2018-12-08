import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcoaches'
})
export class SearchcoachesPipe implements PipeTransform {

  transform(coaches: any[], searchToken: string): any {

    if (searchToken == null)
      searchToken = "";

    searchToken = searchToken.toLowerCase();

    return coaches.filter(elem => elem.name.toLowerCase().indexOf(searchToken) > -1 );
  }

}
