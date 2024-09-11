import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.page.html',
  styleUrls: ['./gracias.page.scss'],
})
export class GraciasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Redirigir al home después de 1 segundo
    setTimeout(() => {
      this.navCtrl.navigateRoot('/home'); // Reemplaza '/home' con la ruta deseada
    }, 1500); // 1000 ms = 1 segundo
  }

}
