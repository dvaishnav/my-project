import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
pat;
  transform(input: any, pattern: any, replacement: any): any {
    this.pat = new RegExp('['+pattern+']', 'g'); 
    return input.replace(this.pat, replacement);
  }

}
