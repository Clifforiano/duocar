import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.page.html',
  styleUrls: ['./homec.page.scss'],
})
export class HomecPage implements OnInit {
  precio: number | undefined; // Se permite que sea undefined
  selectedCar: string = ''; // Inicializado como cadena vacía
  precioError: boolean = false;

  constructor() { }

  ngOnInit() { }

  validatePrice() {
    this.precioError = this.precio! < 1000 || this.precio! > 9999999 || this.precio! <= 0 || !this.isValidNumber(this.precio);
  }

  validateSelection() {
    // Aquí puedes agregar cualquier lógica adicional si lo necesitas
    // Por ejemplo, verificar que se haya seleccionado un auto
  }

  isValidNumber(value: number | undefined): boolean {
    return !isNaN(value!);
  }

  isFormValid(): boolean {
    // Comprueba que el precio no tenga errores y que un auto esté seleccionado
    return !this.precioError && !!this.selectedCar;
  }

  onSubmit() {
    if (this.isFormValid()) {
      // Aquí manejas el envío del formulario
      console.log('Precio:', this.precio);
      console.log('Auto seleccionado:', this.selectedCar);
      // Puedes agregar lógica para guardar los datos
    } else {
      console.log('Por favor, corrige los errores del formulario.');
    }
  }
}
