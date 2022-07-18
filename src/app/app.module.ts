import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { PublicComponent } from './Pages/public/public.component';
import { ClientComponent } from './Pages/client/client.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { Interceptor1Service, interceptorProvider } from './Interceptors/interceptor1.service';
import { MenuAdminComponent } from './Components/menu-admin/menu-admin.component';
import { UsuariosAdminComponent } from './Components/usuarios-admin/usuarios-admin.component';
import { AdminPlanesComponent } from './Pages/admin-planes/admin-planes.component';
import { AdminUsuariosComponent } from './Pages/admin-usuarios/admin-usuarios.component';
import { AdminEmpleadosComponent } from './Pages/admin-empleados/admin-empleados.component';
import { AdminEquiposComponent } from './Pages/admin-equipos/admin-equipos.component';
import { AdminCambiaContraComponent } from './Pages/admin-cambia-contra/admin-cambia-contra.component';
import { MenuClientComponent } from './Components/menu-client/menu-client.component';
import { ClientInicioComponent } from './Pages/client-inicio/client-inicio.component';
import { AcercaDeNosotrosComponent } from './Pages/acerca-de-nosotros/acerca-de-nosotros.component';
import { Headerv2Component } from './Components/headerv2/headerv2.component';
import { HeaderPrincipalComponent } from './Components/header-principal/header-principal.component';
import { Contactv2Component } from './Pages/contactv2/contactv2.component';
import { HomeComponent } from './Pages/home/home.component';
import { PlanesComponent } from './Pages/planes/planes.component';
import { AdminUsuariosv2Component } from './Pages/admin-users/admin-usuariosv2/admin-usuariosv2.component';
import { AdminUsuariosAddComponent } from './Pages/admin-users/admin-usuarios-add/admin-usuarios-add.component';
import { AdminUsuariosEditComponent } from './Pages/admin-users/admin-usuarios-edit/admin-usuarios-edit.component';
import { AdminUsuariosInfoComponent } from './Pages/admin-users/admin-usuarios-info/admin-usuarios-info.component';
import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';
import { AdminPlanesListComponent } from './Pages/admin-planesv2/admin-planes-list/admin-planes-list.component';
import { AdminPlanesAddComponent } from './Pages/admin-planesv2/admin-planes-add/admin-planes-add.component';
import { AdminPlanesEditComponent } from './Pages/admin-planesv2/admin-planes-edit/admin-planes-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    PublicComponent,
    ClientComponent,
    AdminComponent,
    MenuAdminComponent,
    UsuariosAdminComponent,
    AdminPlanesComponent,
    AdminUsuariosComponent,
    AdminEmpleadosComponent,
    AdminEquiposComponent,
    AdminCambiaContraComponent,
    MenuClientComponent,
    ClientInicioComponent,
    AcercaDeNosotrosComponent,
    Headerv2Component,
    HeaderPrincipalComponent,
    HomeComponent,
    Contactv2Component,
    PlanesComponent,
    AdminUsuariosv2Component,
    AdminUsuariosAddComponent,
    AdminUsuariosEditComponent,
    AdminUsuariosInfoComponent,
    AdminPlanesListComponent,
    AdminPlanesAddComponent,
    AdminPlanesEditComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
