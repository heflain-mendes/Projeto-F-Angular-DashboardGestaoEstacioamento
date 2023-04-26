import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './casos-de-uso/dashboard/dashboard.component';
import { EntradaVeiculoComponent } from './casos-de-uso/entrada-veiculo/entrada-veiculo.component';
import { SaidaVeiculoComponent } from './casos-de-uso/saida-veiculo/saida-veiculo.component';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ConsultaRendaComponent } from './casos-de-uso/consulta-renda/consulta-renda.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EntradaVeiculoComponent,
    SaidaVeiculoComponent,
    SidenavComponent,
    ConsultaRendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
