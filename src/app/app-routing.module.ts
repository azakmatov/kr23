import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)}, // здесь все строки конкатенуются, т. е. если в path будет home , то в about будет #/home/about
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)},
    ] // все роуты с ленивой загрузкой
  },


  { path: 'pizzas', redirectTo: 'products' },
  { path: '**', redirectTo: '' }, // отправить на главную страницу, если ни один из роутов не сработал
  // { path: '**', component: AnyComponent }, // е
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
