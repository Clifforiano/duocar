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
    path: 'reserva',
    loadChildren: () => import('./pages/reserva/reserva.module').then( m => m.ReservaPageModule)
  },

  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },

  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },

  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'cambiarcorreo',
    loadChildren: () => import('./pages/cambiarcorreo/cambiarcorreo.module').then( m => m.CambiarcorreoPageModule)
  },
  {
    path: 'cambiarclave',
    loadChildren: () => import('./pages/cambiarclave/cambiarclave.module').then( m => m.CambiarclavePageModule)
  },
  {
    path: 'gracias',
    loadChildren: () => import('./pages/gracias/gracias.module').then( m => m.GraciasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recu',
    loadChildren: () => import('./pages/recu/recu.module').then( m => m.RecuPageModule)
  },
  {
    path: 'cambiarclave2',
    loadChildren: () => import('./pages/cambiarclave2/cambiarclave2.module').then( m => m.Cambiarclave2PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
