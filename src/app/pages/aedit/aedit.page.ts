import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aedit',
  templateUrl: './aedit.page.html',
  styleUrls: ['./aedit.page.scss'],
})
export class AeditPage implements OnInit {
  public form_perfiladmin = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.min(1), // Asegurarse de que el ID sea un número positivo
    ]),
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
    if (this.form_perfiladmin.valid) {
      console.log('Formulario válido:', this.form_perfiladmin.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  get id() {
    return this.form_perfiladmin.get('id');
  }

  get nombre() {
    return this.form_perfiladmin.get('nombre');
  }

  get apellido() {
    return this.form_perfiladmin.get('apellido');
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

  onBuscarID() {
    if (this.id?.valid) {
      console.log('ID buscado:', this.id?.value);
      this.presentToast(`Buscando ID: ${this.id.value}`);
      // Aquí puedes agregar la lógica para buscar el ID
    } else {
      this.presentToast(`El ID es inválido.`);
    }
  }

  onEliminar() {
    if (this.id?.valid) {
      console.log('ID eliminado:', this.id?.value);
      this.presentToast(`ID ${this.id.value} eliminado.`);
      // Aquí puedes agregar la lógica para eliminar el ID
      this.form_perfiladmin.reset(); // Opcional: reiniciar el formulario
    } else {
      this.presentToast(`El ID es inválido.`);
    }
  }
}
