import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGroceryListComponent } from './my-grocery-list/my-grocery-list.component';
import {FormsModule} from '@angular/Forms';
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    MyGroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
   

   
  ],
  providers: [],
    bootstrap: [MyGroceryListComponent]
})
export class AppModule { }
