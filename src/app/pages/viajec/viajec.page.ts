import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajec',
  templateUrl: './viajec.page.html',
  styleUrls: ['./viajec.page.scss'],
})
export class ViajecPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar presionado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar presionado');
          }
        }
      ]
    });

    await alert.present();
  }
}
