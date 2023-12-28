import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
})
export class TiempoComponent implements OnInit {
  formulario!: FormGroup;
  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  latidud: any;
  longitud: any;
  descripcion: any;
  showError: boolean = false;
  mensajeError: string = '';
  fecha: Date = new Date();


  //inyectamos el formBuilder, que nos permite realizar las acciones del formulario
  constructor(
    private fb: FormBuilder,
    private utilService: UtilService,
    private _tiempo: TemperaturaService
  ) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {}

  iniciaFormulario() {
    //el metodo group trabaja con los controles que tenga nuestro formulario
    this.formulario = this.fb.group({
      ciudad: [
        '',
        [
          Validators.required,
          this.utilService.noSantiago,
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    });
  }

  consultar() {
    // console.log('formulario', this.formulario);
    this._tiempo
      .getEstadoTiempo(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe(
        (respuesta: any) => {
        this.showError = false;
        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latidud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;
      },

        (error: any) => {
          this.showError = true;
          this.mensajeError = "Error al consultar el estado del tiempo";
        }
      );
  }
}
