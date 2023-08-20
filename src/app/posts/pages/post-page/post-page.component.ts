import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FrozenProcessor } from 'unified';
import { Post } from './Post';
import { formatDistanceToNow, format } from 'date-fns';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  postDetails = signal<Post | undefined>(undefined);
  postContent = signal<string | undefined>(undefined);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('unified') private unified: FrozenProcessor,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.subscribe(
        (params: Params) => {

          this.subscriptions.add(this.http.get(
            `/content/${params['id']}.md`,
            { responseType: 'text' }
          ).subscribe({
            next: (response) => {
              this.unified.process(response).then((vFile) => {
                this.postDetails.set(this.getPageMetadata(vFile.data['matter']));
                this.postContent.set(vFile?.value?.toString());
              });
            },
            error: (error) => console.log('error', error),
          }));
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goBack() {
    this.document?.defaultView?.history?.back();
  }

  getPageMetadata(matter: any): Post {
    return {
      categories: matter?.categories,
      date: matter?.date,
      excerpt: matter?.excerpt,
      title: matter?.title
    }
  }

  getDisplayDate() {
    const d = new Date(this.postDetails()?.date as string); 
    return formatDistanceToNow(new Date(d), { addSuffix: true });
  }

  getDetailedDate() {
    const d = new Date(this.postDetails()?.date as string);
    return format(new Date(d), "LLL do yyyy");
  }

}
