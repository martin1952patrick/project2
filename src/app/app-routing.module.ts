import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { 
   path: "",
   children: [
  {
    path: "",
    loadChildren: () =>
      import("./views/base/base.module").then((m) => m.BaseModule),
  },
  // {
  //   path: "products",
  //   loadChildren: () =>
  //     import("./views/pages/product/product.module").then(
  //       (m) => m.ProductModule
  //     ),
  // },
  // {
  //   path: "users",
  //   loadChildren: () =>
  //     import("./views/pages/user/user.module").then((m) => m.UserModule),
  // },
  // {
  //   path: "task-board",
  //   loadChildren: () =>
  //     import("./views/pages/task-board/task-board.module").then(
  //       (m) => m.TaskBoardModule
  //     ),
  // },
],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
