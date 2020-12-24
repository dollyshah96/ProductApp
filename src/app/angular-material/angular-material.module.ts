import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
