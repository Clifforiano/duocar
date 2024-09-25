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
      duration: 1000, // Duración en milisegundos
      position: 'top', // Posición del Toast (top, bottom, middle)
    });
    await toast.present();
  }

  onChangeNombre() {
    if (this.nombre?.valid) {
      console.log('Nombre cambiado a:', this.nombre?.value);
      this.presentToast(`Nombre cambiado a: ${this.nombre.value}`);
      // Aquí puedes agregar la lógica que necesites para cambiar el nombre
    } else {
      this.presentToast(`El nombre es inválido.`);
    }
  }

  onChangeApellido() {
    if (this.apellido?.valid) {
      console.log('Apellido cambiado a:', this.apellido?.value);
      this.presentToast(`Apellido cambiado a: ${this.apellido.value}`);
      // Aquí puedes agregar la lógica que necesites para cambiar el apellido
    } else {
      this.presentToast(`El apellido es inválido.`);
    }
  }
}
