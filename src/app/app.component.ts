import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nowYear = new Date().getFullYear();
  
  isCurrentPage = false;
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
  
  // socialLinks = [
  //   {
  //     href: 'https://twitter.com/jessycormier',
  //     sr: 'Twitter page',
  //     icon: TwitterIcon
  //   },
  //   {
  //     href: 'https://github.com/jessycormier',
  //     sr: 'GitHub account',
  //     icon: GitHubIcon
  //   }
  // ];





}
