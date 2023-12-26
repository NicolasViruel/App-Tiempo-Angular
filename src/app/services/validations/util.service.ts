import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  noSantiago(control: FormControl){
    const ciudad: string = control.value?.trim().toLowerCase();
    if(ciudad === 'santiago'){
      return {
        noSantiago: true
      }
    }
    return null;
  }

  
}
