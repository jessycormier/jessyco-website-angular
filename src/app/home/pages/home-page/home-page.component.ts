import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/posts/pages/post-page/Post';

@Component({
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  posts = signal<Post[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.httpClient.get<Post[]>('/assets/content-list.json').subscribe({
        next: (response) => this.posts.set(response),
        error: (error) => console.error(error)
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
