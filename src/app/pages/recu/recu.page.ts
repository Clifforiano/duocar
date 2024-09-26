import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  public form_recu: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Agregar Router al constructor
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
      
      // Redirigir a la página deseada
      this.router.navigate(['/cambiarclave2']); // Cambia la ruta si es necesario
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para eliminar espacios de un control específico
  removeSpaces(controlName: string) {
    const control = this.form_recu.get(controlName);
    if (control) {
      control.setValue(control.value.replace(/\s+/g, ''));
    }
  }
}
