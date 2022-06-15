import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { AnswerComponent } from "../answer/answer.component";


@NgModule({
  declarations: [
    AnswerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    AnswerComponent
  ],
  bootstrap: [CardComponent]
})

export class CardModule { }
