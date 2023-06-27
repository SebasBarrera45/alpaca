import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RopaComponent } from './pages/ropa/ropa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    HombreComponent,
    InicioComponent,
    MujerComponent,
    NavbarComponent,
    RopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
