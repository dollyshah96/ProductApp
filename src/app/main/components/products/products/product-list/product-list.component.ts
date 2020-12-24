import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CProduct } from 'src/app/helpers/models/product.model';
import { ProductsService } from 'src/app/helpers/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'category', 'description', 'image', 'price', 'cart'];
  public products: CProduct[] = [];
  public searchList: CProduct[] = [];

  public searchTxt: string;
  private searchTxtQuery: Subject<string> = new Subject<string>();

  constructor(private productService: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res => {
      if (res && res.length > 0) {
        this.products = res;
      }
    });

    this.searchTxtQuery
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((name) => {
          return this.productService.getSearchList(name);
        }))
      .subscribe(res => {
        if (res && res.length > 0) {
          this.searchList = res;
        } else {
          this.searchList = [];
        }
      });
  }

  public onAddCart(product: CProduct) {
    this.productService.setCart(product);
    this._snackBar.open('Item Added!', 'Success', {
      duration: 2000,
    });
  }

  public onSearchTxtChange() {
    this.searchTxtQuery.next(this.searchTxt);
  }
}
