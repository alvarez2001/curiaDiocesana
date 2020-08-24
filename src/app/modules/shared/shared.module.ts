import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparadorMilesDirective } from "./../../directivas/separador-miles.directive";


@NgModule({
  declarations: [SeparadorMilesDirective],
  imports: [
    CommonModule
  ],
  exports:[
    SeparadorMilesDirective
  ]
})
export class SharedModule { }
