import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.page.html',
  styleUrls: ['./homec.page.scss'],
})
export class HomecPage implements OnInit {
  precio: number;
  selectedCar: string;
  precioError: boolean = false;

  constructor() {
    this.precio = 0; // Inicializado a 0
    this.selectedCar = ''; // Inicializado como cadena vacía
  }

  ngOnInit() { }

  validatePrice() {
    if (this.precio < 1000 || this.precio > 9999999 || this.precio <= 0 || isNaN(this.precio)) {
      this.precioError = true;
    } else {
      this.precioError = false;
    }
  }

  onSubmit() {
    if (!this.precioError) {
      // Aquí manejas el envío del formulario
      console.log('Precio:', this.precio);
      console.log('Auto seleccionado:', this.selectedCar);
      // Puedes agregar lógica para guardar los datos
    } else {
      console.log('Por favor, corrige los errores del formulario.');
    }
  }
}
