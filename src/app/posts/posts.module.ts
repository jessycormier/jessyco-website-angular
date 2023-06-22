import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ImageHoverComponent } from '../components/image-hover/image-hover.component';


@NgModule({
  declarations: [
    PostPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MarkdownModule.forChild(),
    ImageHoverComponent,
  ]
})
export class PostsModule { }
