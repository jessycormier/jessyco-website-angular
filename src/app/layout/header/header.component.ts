import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  isCurrentPage = true;

  navItems: {
    title: string;
    route: string;
    external?: boolean;
    ariaDetail?: string;
  }[] = [
    {
      title: 'Posts',
      route: '/posts',
      ariaDetail: 'My posts'
    },
    {
      title: 'RSS',
      route: '/rss.xml',
      external: true
    }
  ];
}
