import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  public form_recu: FormGroup;

  constructor(private fb: FormBuilder) {
    // Crear el FormGroup con validaciones
    this.form_recu = this.fb.group({
      correo: ['', [Validators.required, Validators.email, this.validarDominio]], // Correo
    });
  }

  ngOnInit() {}

  // Validación para comprobar que el dominio sea .cl o .com
  validarDominio(control: any) {
    const email = control.value;
    const dominioValido = /\.(cl|com)$/.test(email);
    return dominioValido ? null : { dominioInvalido: true };
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form_recu.valid) {
      console.log('Correo válido:', this.form_recu.value);
      // Aquí puedes agregar la lógica para enviar el correo de recuperación
    } else {
      console.log('Formulario no válido');
    }
  }
}
