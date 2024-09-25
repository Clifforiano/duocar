import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarclave2',
  templateUrl: './cambiarclave2.page.html',
  styleUrls: ['./cambiarclave2.page.scss'],
})
export class Cambiarclave2Page implements OnInit {
  public form_clave: FormGroup;
  public claveIncorrecta: boolean = false; // Para mostrar el error de clave incorrecta

  constructor(private fb: FormBuilder, private toastController: ToastController, private navCtrl: NavController) {
    // Crear el FormGroup con validaciones
    this.form_clave = this.fb.group({
      claveActual: ['', Validators.required], // Clave actual
      contraseñaNueva: ['', [Validators.required, Validators.minLength(6)]], // Nueva contraseña
      confirmarContraseña: ['', Validators.required], // Confirmar nueva contraseña
    }, { validator: this.matchingPasswords }); // Validación para verificar que ambas contraseñas sean iguales
  }

  ngOnInit() {}

  // Método para verificar que ambas contraseñas sean iguales
  matchingPasswords(formGroup: FormGroup) {
    const contraseñaNueva = formGroup.get('contraseñaNueva')?.value;
    const confirmarContraseña = formGroup.get('confirmarContraseña')?.value;

    return contraseñaNueva === confirmarContraseña 
      ? null 
      : { passwordsDoNotMatch: true }; // Devuelve un error si las contraseñas no coinciden
  }

  // Método para comprobar la clave actual en tiempo real
  checkClaveActual() {
    const claveActual = this.form_clave.get('claveActual')?.value;
    this.claveIncorrecta = (claveActual !== '123' && claveActual.length > 0); // Establecer error si la clave es incorrecta
  }

  // Método para manejar el envío del formulario
  async onSubmit() {
    this.claveIncorrecta = false; // Resetear el estado de la clave incorrecta

    if (this.form_clave.valid) {
      const claveActual = this.form_clave.get('claveActual')?.value;
      // Verificar que la clave actual sea '123'
      if (claveActual === '123') {
        console.log('Contraseña cambiada exitosamente:', this.form_clave.value);
        // Aquí puedes agregar la lógica para cambiar la contraseña

        // Mostrar notificación de éxito
        await this.presentToast('Contraseña cambiada exitosamente.');

        // Redirigir a la página de login
        this.navCtrl.navigateRoot('/login'); // Cambia '/login' por la ruta correcta si es diferente
      } else {
        this.claveIncorrecta = true; // Establecer error de clave incorrecta
        console.log('Clave actual incorrecta');
      }
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
