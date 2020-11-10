import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { CargarScriptsService } from './../cargar-scripts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  constructor(private _CargarScripts:CargarScriptsService)
  {
    _CargarScripts.Cargar(["form-validation"]);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  tiposs: any = ['A+', 'A-', 'B+', 'B-','AB+','AB-','O+','O-']

  formulario = new FormGroup({

  nombre : new FormControl(),
  ci : new FormControl(),
  nempleado : new FormControl(),
  area : new FormControl(),
  profesion : new FormControl(),
  anios : new FormControl(),
  salhora : new FormControl(),
  salmes : new FormControl(),

  nseguro : new FormControl(),
  tipodesangre : new FormControl(),
  estatura : new FormControl(),
  peso : new FormControl(),
  enfbase : new FormControl(),

  direccion : new FormControl(),
  telefono : new FormControl(),
  correo : new FormControl()
 });
 }
 
