import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumber',
})
export class MyNumberPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString(); //Converts a number to a string by using the current or specified locale.

    // @param locales — A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

    // @param options — An object that contains one or more properties that specify comparison options.
  }
}
