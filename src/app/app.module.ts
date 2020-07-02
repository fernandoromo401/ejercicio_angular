import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { MaterialuiModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './pages/profile/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { UpdateOrderComponent } from './pages/update-order/update-order.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    TableComponent,
    ProfileComponent,
    NewOrderComponent,
    UpdateOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialuiModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }