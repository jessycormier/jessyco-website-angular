import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: "",
    component: ListPageComponent,
  },
  {
    path: ":id",
    component: PostPageComponent
  },
  // {
  //   path: "**",
  //   redirectTo: "/"
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
