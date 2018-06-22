import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatSnackBarModule],
  exports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatSnackBarModule],
})
export class AppMaterialModule { }