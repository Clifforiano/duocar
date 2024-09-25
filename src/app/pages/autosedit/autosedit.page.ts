import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-autosedit',
  templateUrl: './autosedit.page.html',
  styleUrls: ['./autosedit.page.scss'],
})
export class AutoseditPage implements OnInit {
  form_autos: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    this.form_autos = this.formBuilder.group({
      patente: ['', [Validators.required]],  // Sin validación de solo números
      marca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      modelo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      color: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.minLength(3), Validators.maxLength(50)]],
    });
  }

  ngOnInit() {}

  validatePatente() {
    // Este método se puede usar si necesitas lógica adicional al ingresar la patente
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      position: 'top', // Posición del Toast (top, bottom, middle)
    });
    await toast.present();
  }

  async search() {
    if (this.form_autos.get('patente')?.valid) {
      await this.presentToast('Búsqueda exitosa.');
    } else {
      await this.presentToast('Por favor, ingrese una patente válida.');
    }
  }

  async changeMarca() {
    if (this.form_autos.get('marca')?.valid) {
      await this.presentToast('Marca cambiada exitosamente.');
    } else {
      await this.presentToast('Por favor, ingrese una marca válida.');
    }
  }

  async changeModelo() {
    if (this.form_autos.get('modelo')?.valid) {
      await this.presentToast('Modelo cambiado exitosamente.');
    } else {
      await this.presentToast('Por favor, ingrese un modelo válido.');
    }
  }

  async changeColor() {
    if (this.form_autos.get('color')?.valid) {
      await this.presentToast('Color cambiado exitosamente.');
    } else {
      await this.presentToast('Por favor, ingrese un color válido.');
    }
  }

  async delete() {
    if (this.form_autos.get('patente')?.valid) {
      await this.presentToast('Eliminación exitosa.');
    } else {
      await this.presentToast('No se puede eliminar. Asegúrese de que la patente sea válida.');
    }
  }
}
