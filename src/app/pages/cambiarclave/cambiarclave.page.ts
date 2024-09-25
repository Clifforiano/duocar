import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {
  form_clave: FormGroup;

  constructor(private fb: FormBuilder, private toastController: ToastController) {
    this.form_clave = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  ngOnInit() {}

  // Validador para comprobar si las contraseñas coinciden
  passwordsMatch(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    // Siempre retorna el error de coincidencia si no coinciden
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  async onSubmit() {
    if (this.form_clave.valid) {
      // Aquí puedes agregar la lógica para cambiar la contraseña en el backend.
      console.log('Contraseña cambiada exitosamente.');

      // Mostrar un toast de éxito
      const toast = await this.toastController.create({
        message: 'Contraseña cambiada exitosamente.',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    } else {
      // Si el formulario no es válido, actualiza el estado para mostrar los errores.
      this.form_clave.markAllAsTouched();
    }
  }
}
