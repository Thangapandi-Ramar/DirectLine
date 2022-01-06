import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wizardFilter'
})
export class WizardFilterPipe implements PipeTransform {

  transform(value: any, tradeSearch: string): any {
    if (!tradeSearch) {return value; }
    const filteredValue = value.filter(v => {
      if (!v) {return; }
      return v.toLowerCase().indexOf(tradeSearch.toLowerCase()) !== -1;
      })
    return filteredValue;
  }

}
