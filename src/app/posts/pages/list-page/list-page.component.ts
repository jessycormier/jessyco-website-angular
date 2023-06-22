import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

  posts = [
    { url: '/posts/2022-09-12-making-a-mark',         title: 'Making A Mark' },
    { url: '/posts/2022-12-03-going-back-home',       title: 'Going back home' },
    { url: '/posts/2022-12-29-guess-i-lied',          title: 'I guess I lied?' },
    { url: '/posts/2022-12-30-site-update',           title: 'Website update.' },
    { url: '/posts/2023-01-03-vscode-user-settings',  title: 'My Visual Studio Code Setup' },
    { url: '/posts/2023-01-08-site-update',           title: 'Website update.' },
    { url: '/posts/2023-01-09-site-update',           title: 'Website update.' },
    { url: '/posts/2023-01-09-site-update',           title: 'Website update.' },
    { url: '/posts/2023-01-28-release-versioning',    title: 'Release Versioning' },
    { url: '/posts/2023-03-04-site-update',           title: 'Website update.' },
    { url: '/posts/2023-05-07-small-update-may-2023', title: 'A small update on the website.' },
  ]
}
