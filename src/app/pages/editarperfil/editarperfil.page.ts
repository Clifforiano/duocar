import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  public form_perfil = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      this.lettersOnlyValidator
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      this.lettersOnlyValidator
    ]),
  });

  constructor(private fb: FormBuilder, private toastController: ToastController) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form_perfil.valid) {
      console.log('Formulario válido:', this.form_perfil.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  get nombre() {
    return this.form_perfil.get('nombre');
  }

  get apellido() {
    return this.form_perfil.get('apellido');
  }

  lettersOnlyValidator(control: AbstractControl) {
    const pattern = /^[A-Za-z\s]+$/;
    const valid = pattern.test(control.value);
    return valid ? null : { lettersOnly: true };
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'top',
    });
    await toast.present();
  }

  onChangeNombre() {
    if (this.nombre?.valid) {
      console.log('Nombre cambiado a:', this.nombre?.value);
      this.presentToast(`Nombre cambiado a: ${this.nombre.value}`);
    } else {
      this.presentToast(`El nombre es inválido.`);
    }
  }

  onChangeApellido() {
    if (this.apellido?.valid) {
      console.log('Apellido cambiado a:', this.apellido?.value);
      this.presentToast(`Apellido cambiado a: ${this.apellido.value}`);
    } else {
      this.presentToast(`El apellido es inválido.`);
    }
  }

  removeSpaces(controlName: string) {
    const control = this.form_perfil.get(controlName);
    if (control) {
      control.setValue(control.value.replace(/\s+/g, ''));
    }
  }
}
