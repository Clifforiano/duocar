import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  // Método para mostrar la notificación
  async mostrarNotificacionCancelacion() {
    const toast = await this.toastController.create({
      message: 'El viaje ha sido cancelado.',
      duration: 1000, // Duración en milisegundos
      position: 'top', // Posición del Toast (top, bottom, middle)
    });
    await toast.present();
  }
}
