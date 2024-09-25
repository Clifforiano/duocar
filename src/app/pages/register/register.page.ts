import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public form_register: FormGroup;

  constructor(private fb: FormBuilder, private toastController: ToastController, private navCtrl: NavController) {
    // Crear el FormGroup con validaciones
    this.form_register = this.fb.group({
      nombre: ['', [Validators.required, this.lettersOnlyValidator]], // Nombre
      apellido: ['', [Validators.required, this.lettersOnlyValidator]], // Apellido
      correoNuevo: ['', [Validators.required, Validators.email, this.validarDominio]], // Correo nuevo
      correoConfirmacion: ['', [Validators.required, Validators.email]], // Confirmación de correo
      contraseña: ['', [Validators.required, Validators.minLength(6)]], // Contraseña
      confirmarContraseña: ['', Validators.required], // Confirmar contraseña
    }, { validators: [this.matchingEmails, this.matchingPasswords] }); // Validaciones para verificar que ambos correos y contraseñas sean iguales
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

  // Método para verificar que ambas contraseñas sean iguales
  matchingPasswords(formGroup: FormGroup) {
    const contraseña = formGroup.get('contraseña')?.value;
    const confirmarContraseña = formGroup.get('confirmarContraseña')?.value;

    return contraseña === confirmarContraseña
      ? null
      : { passwordsDoNotMatch: true }; // Devuelve un error si las contraseñas no coinciden
  }

  // Validación para comprobar que el dominio sea .cl o .com
  validarDominio(control: AbstractControl) {
    const email = control.value;
    const dominioValido = /\.(cl|com)$/.test(email);
    return dominioValido ? null : { dominioInvalido: true };
  }

  // Validación para permitir solo letras en nombre y apellido
  lettersOnlyValidator(control: AbstractControl) {
    const pattern = /^[A-Za-z\s]+$/; // Patrón para letras y espacios
    const valid = pattern.test(control.value);
    return valid ? null : { lettersOnly: true }; // Retorna un error si no es válido
  }

  // Método para manejar el envío del formulario
  async onSubmit() {
    if (this.form_register.valid) {
      console.log('Cuenta creada exitosamente:', this.form_register.value);
      // Aquí puedes agregar la lógica para crear la cuenta

      // Mostrar notificación de éxito
      await this.presentToast('Cuenta creada exitosamente.');

      // Redirigir a la página de home
      this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la ruta correcta si es diferente
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para presentar un Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      position: 'top', // Posición del Toast (top, bottom, middle)
    });
    await toast.present();
  }
}
