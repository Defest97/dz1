import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoveDuplicatesPipe } from './remove-duplicates.pipe';
import { ConverterPipe } from './converter.pipe';
import { PhoneFormatPipe } from './phone-format.pipe';
import { DuplicateLettersPipe } from './duplicate-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemoveDuplicatesPipe,
    ConverterPipe,
    PhoneFormatPipe,
    DuplicateLettersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
