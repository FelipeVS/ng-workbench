import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgAdvancedDropdownComponent } from './ng-advanced-dropdown/ng-advanced-dropdown.component';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  declarations: [
    AppComponent,
    NgAdvancedDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
