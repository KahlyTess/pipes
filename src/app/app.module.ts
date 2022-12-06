import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
 import '@angular/common/locales/global/pt';

//import { SettingsService } from "./settings.service";
import { FiltroArrayPipe } from './filtro-array.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
     CamelCasePipe,
     FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // SettingsService,
    //
    // // {
    // //    provide: LOCALE_ID,
    // //    useValue: 'pt-BR',
    // // }
    //
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocate()
    // }

    { provide: LOCALE_ID, useValue: 'pt' }

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
