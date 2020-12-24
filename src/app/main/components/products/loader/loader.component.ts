import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/helpers/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  private subscriptions: Subscription;

  constructor(private loaderService: LoadingService) { }

  ngOnInit(): void {
    this.subscriptions = this.loaderService.isLoading.subscribe(response => {
      this.isLoading = response;
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
