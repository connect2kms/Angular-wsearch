import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipedia: WikiService) {}
  onTerm(term: string) {
    const result = this.wikipedia.search(term);
    console.log(result);
  }
}
