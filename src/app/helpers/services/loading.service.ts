import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public isLoading = new BehaviorSubject<boolean>(true);

  public showLoader() {
    this.isLoading.next(true);
  }

  public hideLoader() {
    this.isLoading.next(false);
  }
}
