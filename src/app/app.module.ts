import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegationModule } from './navegation/navegation.module';
import { ButtonsModule } from './buttons/buttons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavegationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
