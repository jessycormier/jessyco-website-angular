import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MarkdownModule.forChild(),
  ]
})
export class PostsModule { }
