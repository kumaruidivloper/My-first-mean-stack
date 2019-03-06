import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public storedPosts: Post[] = [];
  title = 'My-first-mean-stack';

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
