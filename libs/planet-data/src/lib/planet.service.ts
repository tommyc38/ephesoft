import { Injectable } from '@angular/core';
import { Planet, Response } from '@ephesoft/utilities';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface PageData {
  [page: string]: Response<Planet>
}


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private url = 'https://swapi.dev/api/planets/';
  private _pageData: PageData = {};

  constructor(private http: HttpClient) {
  }

  getPlanets(page: number = 1): Observable<Response<Planet>> {
    if (this._pageData[page]) {
      return of(this._pageData[page]);
    }
    const url = `${this.url}?page=${page}`;
    return this.http.get<Response<Planet>>(url).pipe(
      map(response => {
        this._pageData[page] = response;
        return response;
      }));
  }

  getPageFromUrl(url: string | null): number | null {
    if (typeof url === 'string') {
      const index = url.lastIndexOf('=');
      if (index === -1) return null;
      return +url.slice(index + 1);
    }
    return null;
  }

}
