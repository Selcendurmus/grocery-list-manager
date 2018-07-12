import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGroceryListComponent } from './my-grocery-list/my-grocery-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MyGroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule

    
   

   
  ],
  providers: [],
    bootstrap: [MyGroceryListComponent]
})
export class AppModule { }
