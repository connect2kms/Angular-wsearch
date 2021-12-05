import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any = [];
  constructor(private wikipedia: WikiService) {}
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response) => {
      this.pages = response;
    });
  }
}
