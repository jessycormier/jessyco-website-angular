import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  nowYear = new Date().getFullYear();
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
