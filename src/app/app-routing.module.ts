import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//   {
//   path: '',
//   component: LayoutComponent,
//   children: [
//     {
//       path: 'book',
//       loadChildren: () => import('./home/home.module').then(m => m.HomeComponentModule)
//     }
//   ]
// },
// {
//   path: '**',
//   pathMatch: 'full',
//   redirectTo: ''
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
