import { Component, OnInit } from '@angular/core';
import contentList from '../../../../generated/content-list.json';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {

  format = format;
  posts: any[] = [];

  constructor(private httpClient: HttpClient) { 
    contentList.forEach((c)=>{
      const d = new Date(c.date);
      this.posts.push({
        ...c,
        dateYear: format(d, 'yyyy'),
        dateMonth: format(d, 'MMM'),
        dateDay: format(d, 'dd')
      });
    })
  }

  ngOnInit() {
    // this.httpClient.get('/assets/content-list.json').subscribe({
    //   next: (content) => console.log(content)
    // })
  }

  private makeList() {
    //TODO Test json import vs http with hydration to see if it does the request.
  }

}
