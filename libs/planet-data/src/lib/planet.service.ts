import { Injectable } from '@angular/core';
import { Planet } from '@ephesoft/utilities';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private url = 'https://swapi.dev/api/';
  private planets: Planet[] = [];

  constructor(private http: HttpClient) {
  }

  getPlanets(): Observable<Planet[]> {
    if (this.planets.length > 0) return of(this.planets);
    return this.http.get<Record<string,any>>(this.url).pipe(
      take(1),
      map(planets => {
        this.planets = planets.results as Planet[];
        return this.planets;
      })
    );

  }
}
