import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard1Service as guard} from './Guards/guard1.service';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';

import { AdminCambiaContraComponent } from './Pages/admin-cambia-contra/admin-cambia-contra.component';
import { AdminEmpleadosComponent } from './Pages/admin-empleados/admin-empleados.component';
import { AdminEquiposComponent } from './Pages/admin-equipos/admin-equipos.component';
import { AdminPlanesComponent } from './Pages/admin-planes/admin-planes.component';
import { AdminUsuariosComponent } from './Pages/admin-usuarios/admin-usuarios.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { ClientInicioComponent } from './Pages/client-inicio/client-inicio.component';
import { ClientComponent } from './Pages/client/client.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { Contactv2Component } from './Pages/contactv2/contactv2.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PlanesComponent } from './Pages/planes/planes.component';
import { PublicComponent} from './Pages/public/public.component';

const routes: Routes = [
  {path: "public", component: PublicComponent, children:[
    {path: "home", component: HomeComponent},
    {path: "planes", component: PlanesComponent},
    {path: "acerca-de-nosotros", component: AcercaDeNosotrosComponent},
    {path: "contact", component: ContactComponent},
    {path: "contactv2", component: Contactv2Component},
    {path: "login", component: LoginComponent},
    {path: "**", redirectTo: "home"}
  ]},
  {path: "client", component: ClientComponent, canActivate: [guard], data: { expectedRol: ["user"]}, children:[
    {path: "inicio", component: ClientInicioComponent},
    {path: "**", redirectTo: "inicio"}
  ]},
  {path: "admin", component: AdminComponent, canActivate: [guard], data: { expectedRol: ["admin"]}, children:[
    {path: "planes", component: AdminPlanesComponent},
    {path: "usuarios", component: AdminUsuariosComponent},
    {path: "empleados", component: AdminEmpleadosComponent},
    {path: "equipos", component: AdminEquiposComponent},
    {path: "cambiaContra", component: AdminCambiaContraComponent},
    {path: "**", redirectTo: "usuarios"}
  ]},
  {path: "**", redirectTo:"public"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
