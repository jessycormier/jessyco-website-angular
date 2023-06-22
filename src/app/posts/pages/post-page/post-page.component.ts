import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit, OnDestroy {

  pageUrl= signal<string|undefined>(undefined);
  private subscriptions = new Subscription();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    // private http: HttpClient
  ) { }
  
  ngOnInit() {
    this.subscriptions.add(
      this.route.params.subscribe(
        (params: Params) => {
          
          this.pageUrl.set(`/content/${params['id']}.md`);

          // this.http.get(`/content/${params['id']}.md`).subscribe({
          //   next: console.log,
          //   error: console.log,
          // })
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
}
