import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule],
  exports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule],
})
export class AppMaterialModule { }