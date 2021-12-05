import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

interface WikiResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<WikiResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          srsearch: term,
          format: 'json',
          utf8: '1',
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
