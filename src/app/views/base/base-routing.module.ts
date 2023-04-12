import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from "./base.component";

const routes: Routes = [];

export const BaseRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BaseComponent,
      },
      // {
      //   path: "navbar",
      //   component: NavbarComponent,
      // },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
