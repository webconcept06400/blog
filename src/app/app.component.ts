import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mongo-app';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Mon blabla',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      title: 'Mon second post',
      content: 'Mon blabla',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Mon blabla',
      loveIts: 0,
      created_at:  new Date()
    }
  ];

}
