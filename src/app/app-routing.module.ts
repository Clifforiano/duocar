import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'historial-pasajero',
    loadChildren: () => import('./pages/pasajero/opciones/historial-pasajero/historial-pasajero.module').then( m => m.HistorialPasajeroPageModule)
  },
  {
    path: 'perfil-pasajero',
    loadChildren: () => import('./pages/pasajero/opciones/perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login_register/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
