import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CProduct } from '../models/product.model';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public getCartItems = new BehaviorSubject<CProduct[]>([]);
  public cartItems = [];
  private APIBaseUrl: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  public getAllProducts(): Observable<CProduct[]> {
    return this.http.get<CProduct[]>(`${this.APIBaseUrl}/products`).pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );;
  }

  public getSearchList(searchTxt: string): Observable<CProduct[]> {
    return this.http.get<CProduct[]>(`${this.APIBaseUrl}/search?searctText=${searchTxt}`).pipe(
      retry(1),
      catchError(this.errorHandlingService.handleError)
    );;
  }

  public setCart(product: CProduct) {
    this.cartItems.push(product);
  }

  public getCart(): CProduct[] {
    return this.cartItems;
  }
}
