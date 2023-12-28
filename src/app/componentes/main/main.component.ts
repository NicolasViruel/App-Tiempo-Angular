import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ciudades: any = [ 'Santiago', 'Buenos aires', 'Lima', 'Bogota', 'Montevideo', 'Asuncion', 'Brasilia'];
  showCiudad: boolean = true;
  changeCss: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarCiudad(){
    this.showCiudad = !this.showCiudad;
  };

  cambioCss(){
    this.changeCss = !this.changeCss;
  }

}
