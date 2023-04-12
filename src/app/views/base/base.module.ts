import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BaseRoutingModule } from './base-routing.module';
import { BaseRoutes } from "./base-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { BaseComponent } from "./base.component";



@NgModule({
  declarations: [
    BaseComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(BaseRoutes),
  ],
  // schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent],
  providers: [],
})
export class BaseModule { }
