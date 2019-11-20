import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { BigButtonComponent } from '../buttons/big-button/big-button.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports:[MenuComponent, BigButtonComponent]
})
export class NavegationModule { }
