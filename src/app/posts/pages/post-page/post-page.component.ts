import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FrozenProcessor } from 'unified';


import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.tz.setDefault('Atlantic Standard Time');

type Post = {
  categories: undefined,
  date: undefined | string | Date
  excerpt: undefined | string,
  title: undefined | string
}

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit, OnDestroy {

  dayjs = dayjs;
  
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
              this.unified.process(response).then((file) => {
                this.postDetails.set(this.getPageMetadata(file.data['matter']));
                this.postContent.set(file?.value?.toString());
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
}
