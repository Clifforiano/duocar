import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {
  public form_autos: FormGroup;

  constructor(private fb: FormBuilder, private toastController: ToastController) {
    // Crear el FormGroup con validaciones
    this.form_autos = this.fb.group({
      patente: ['', Validators.required], // Patente
      marca: ['', Validators.required], // Marca
      modelo: ['', Validators.required], // Modelo
      color: ['', [Validators.required, this.lettersOnlyValidator]], // Color
    });
  }

  ngOnInit() {}

  // Validación para permitir solo letras en el color
  lettersOnlyValidator(control: AbstractControl) {
    const pattern = /^[A-Za-z\s]+$/; // Patrón para letras y espacios
    const valid = pattern.test(control.value);
    return valid ? null : { lettersOnly: true }; // Retorna un error si no es válido
  }

  // Método para manejar el envío del formulario (Agregar)
  async onSubmit() {
    if (this.form_autos.valid) {
      console.log('Auto agregado:', this.form_autos.value);
      // Aquí puedes agregar la lógica para manejar el auto agregado

      // Mostrar notificación de éxito
      await this.presentToast('Auto agregado exitosamente.');
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para manejar el botón de eliminar
  async onDelete() {
    const patente = this.form_autos.get('patente')?.value;
    if (patente) {
      console.log('Auto eliminado:', patente);
      // Aquí puedes agregar la lógica para manejar el auto eliminado

      // Mostrar notificación de éxito
      await this.presentToast('Auto eliminado exitosamente.');
      this.form_autos.reset(); // Opcional: Resetear el formulario después de eliminar
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
