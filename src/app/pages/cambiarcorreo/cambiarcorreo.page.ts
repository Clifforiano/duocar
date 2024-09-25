import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcorreo',
  templateUrl: './cambiarcorreo.page.html',
  styleUrls: ['./cambiarcorreo.page.scss'],
})
export class CambiarcorreoPage implements OnInit {

  public form_correo: FormGroup;

  constructor(private fb: FormBuilder, private toastController: ToastController) {
    // Crear el FormGroup con validaciones
    this.form_correo = this.fb.group({
      correoNuevo: ['', [Validators.required, Validators.email, this.validarDominio]], // Correo nuevo
      correoConfirmacion: ['', [Validators.required, Validators.email, this.validarDominio]], // Confirmación de correo
    }, { validator: this.matchingEmails }); // Validación para verificar que ambos correos sean iguales
  }

  ngOnInit() {}

  // Método para verificar que ambos correos sean iguales
  matchingEmails(formGroup: FormGroup) {
    const correoNuevo = formGroup.get('correoNuevo')?.value;
    const correoConfirmacion = formGroup.get('correoConfirmacion')?.value;

    return correoNuevo === correoConfirmacion 
      ? null 
      : { emailsDoNotMatch: true }; // Devuelve un error si los correos no coinciden
  }

  // Validación para comprobar que el dominio sea .cl o .com
  validarDominio(control: any) {
    const email = control.value;
    const dominioValido = /\.(cl|com)$/.test(email);
    return dominioValido ? null : { dominioInvalido: true };
  }

  // Método para manejar el envío del formulario
  async onSubmit() {
    if (this.form_correo.valid) {
      console.log('Correos válidos:', this.form_correo.value);
      // Aquí puedes agregar la lógica para cambiar el correo

      // Mostrar notificación de cambio
      await this.presentToast('Correo cambiado exitosamente.');
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para presentar un Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000, // Duración en milisegundos
      position: 'top', // Posición del Toast (top, bottom, middle)
    });
    await toast.present();
  }
}
