import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatSelectModule],
  exports: [MatCardModule, MatInputModule, MatSelectModule],
})
export class AppMaterialModule { }