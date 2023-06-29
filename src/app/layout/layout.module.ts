import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandComponent } from '../components/brand/brand.component';
import { GithubIconComponent } from '../components/github-icon/github-icon.component';
import { SkipToMainComponent } from '../components/skip-to-main/skip-to-main.component';
import { TwitterIconComponent } from '../components/twitter-icon/twitter-icon.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from '../components/container/container.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrandComponent,
    SkipToMainComponent,
    GithubIconComponent,
    TwitterIconComponent,
    ContainerComponent
  ]
})
export class LayoutModule { }
