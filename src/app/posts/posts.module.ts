import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnimatedTextComponent } from '../components/animated-text/animated-text.component';
import { ContainerComponent } from '../components/container/container.component';
import { ImageHoverComponent } from '../components/image-hover/image-hover.component';
import { TagComponent } from '../components/tag/tag.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { unifiedFactory } from './pages/post-page/remark-factory.function';
import { PostsRoutingModule } from './posts-routing.module';
@NgModule({
  providers: [
    {
      provide: 'unified',
      useFactory: unifiedFactory
    }
  ],
  declarations: [
    PostPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AnimatedTextComponent,
    ImageHoverComponent,
    PostsRoutingModule,
    TagComponent,
    ContainerComponent
  ]
})
export class PostsModule { }
