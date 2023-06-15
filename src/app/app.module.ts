import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { SkipToMainComponent } from './components/skip-to-main/skip-to-main.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoTextComponent,
    SkipToMainComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }
