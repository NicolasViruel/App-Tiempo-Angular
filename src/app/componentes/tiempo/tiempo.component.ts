import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup;
  //inyectamos el formBuilder, que nos permite realizar las acciones del formulario
  constructor(private fb: FormBuilder, private utilService: UtilService) {
    this.iniciaFormulario();
   }

  ngOnInit(): void {
  }

  iniciaFormulario(){
    //el metodo group trabaja con los controles que tenga nuestro formulario
    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, this.utilService.noSantiago ,Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }
  
  consultar(){
    console.log("formulario" , this.formulario);
    
  }

}
