import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnimatedTextComponent } from '../components/animated-text/animated-text.component';
import { ContainerComponent } from '../components/container/container.component';
import { ProfilePictureComponent } from '../components/profile-picture/profile-picture.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NowPageComponent } from './pages/now-page/now-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NowPageComponent,
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ProfilePictureComponent,
    AnimatedTextComponent,
    ContainerComponent
  ]
})
export class HomeModule { }
