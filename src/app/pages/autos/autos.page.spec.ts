import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {
  public form_autos: FormGroup;

  constructor(private fb: FormBuilder) {
    // Crear el FormGroup con validaciones
    this.form_autos = this.fb.group({
      patente: ['', Validators.required], // Patente
      marca: ['', Validators.required], // Marca
      modelo: ['', Validators.required], // Modelo
      color: ['', [Validators.required, this.lettersOnlyValidator]], // Color
    });
  }

  ngOnInit() {}

  // Validación para permitir solo letras en el color
  lettersOnlyValidator(control: AbstractControl) {
    const pattern = /^[A-Za-z\s]+$/; // Patrón para letras y espacios
    const valid = pattern.test(control.value);
    return valid ? null : { lettersOnly: true }; // Retorna un error si no es válido
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form_autos.valid) {
      console.log('Auto agregado:', this.form_autos.value);
      // Aquí puedes agregar la lógica para manejar el auto agregado
    } else {
      console.log('Formulario no válido');
    }
  }
}
