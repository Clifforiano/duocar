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
  public claveIncorrecta: boolean = false;

  constructor(private fb: FormBuilder, private toastController: ToastController, private navCtrl: NavController) {
    this.form_clave = this.fb.group({
      claveActual: ['', Validators.required],
      contraseñaNueva: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña: ['', Validators.required],
    }, { validator: this.matchingPasswords });
  }

  ngOnInit() {}

  matchingPasswords(formGroup: FormGroup) {
    const contraseñaNueva = formGroup.get('contraseñaNueva')?.value;
    const confirmarContraseña = formGroup.get('confirmarContraseña')?.value;

    return contraseñaNueva === confirmarContraseña 
      ? null 
      : { passwordsDoNotMatch: true };
  }

  checkClaveActual() {
    const claveActual = this.form_clave.get('claveActual')?.value;
    this.claveIncorrecta = (claveActual !== '123' && claveActual.length > 0);
  }

  // Método para manejar el envío del formulario
  async onSubmit() {
    this.claveIncorrecta = false;

    if (this.form_clave.valid) {
      const claveActual = this.form_clave.get('claveActual')?.value;
      if (claveActual === '123') {
        console.log('Contraseña cambiada exitosamente:', this.form_clave.value);
        await this.presentToast('Contraseña cambiada exitosamente.');
        this.navCtrl.navigateRoot('/login');
      } else {
        this.claveIncorrecta = true;
        console.log('Clave actual incorrecta');
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para eliminar espacios de un control específico
  removeSpaces(controlName: string) {
    const control = this.form_clave.get(controlName);
    if (control) {
      control.setValue(control.value.replace(/\s+/g, ''));
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
}
