import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from "./card/card.module";
import { CardComponent } from './card/card.component';
import { DataService } from "./data.service";
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
