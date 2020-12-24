import { Component, OnInit } from '@angular/core';
import { CProduct } from 'src/app/helpers/models/product.model';
import { ProductsService } from 'src/app/helpers/services/products.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'image', 'price'];

  public cartItems: CProduct[] = [];
  public totalCartPrice: number;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCart();
    this.totalCartPrice = this.getTotalCartValue();
  }

  public getTotalCartValue() {
    let sum = 0;
    this.cartItems.map(product => {
      sum = sum + product.price;
      console.log(sum, product);
    });
    return sum;
  }
}
