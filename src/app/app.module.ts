import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ImageService } from './services/image.service';

import { NgxVcardModule } from "ngx-vcard";
import { IWantOneComponent } from './pages/i-want-one/i-want-one.component';
import { FormsModule } from '@angular/forms';
import { EdBurnsComponent } from './pages/ed-burns/ed-burns.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IWantOneComponent,
    EdBurnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxVcardModule,
    FormsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
