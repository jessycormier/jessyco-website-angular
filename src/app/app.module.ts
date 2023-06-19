import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { GithubIconComponent } from './components/github-icon/github-icon.component';
import { SkipToMainComponent } from './components/skip-to-main/skip-to-main.component';
import { TwitterIconComponent } from './components/twitter-icon/twitter-icon.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrandComponent,
    SkipToMainComponent,
    GithubIconComponent,
    TwitterIconComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }
