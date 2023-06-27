import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RopaComponent } from './pages/ropa/ropa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'unisex',      component: RopaComponent},
      { path: 'contacto',    component: ContactoComponent},
      { path: 'hombre',      component: HombreComponent},
      { path: 'mujer',       component: MujerComponent},
      { path: 'inicio',      component: InicioComponent},
      { path: 'navbar',      component: NavbarComponent},
      { path: 'footer',      component: FooterComponent},
      { path: '**',          redirectTo: 'inicio' }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
