import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBackComponent,
    CardSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
