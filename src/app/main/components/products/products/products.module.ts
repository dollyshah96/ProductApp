import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { LoaderComponent } from '../loader/loader.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductsComponent } from './products.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'cart',
        component: ProductCartComponent
      }
    ]
  },
];

@NgModule({
  declarations: [ProductListComponent, LoaderComponent, ProductCartComponent, ProductsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
