import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '@ephesoft/utilities';
import { from, Observable, of } from 'rxjs';
import { mergeMap, reduce, takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  getManyPeople(url: string[]): Observable<Person[]> {
    if(url.length === 0) return of([])
    return from(url).pipe(
      mergeMap(url => {
        return this.http.get<Person>(url);
      }),
      reduce((people: Person[], person: Person) => {
        people.push(person);
        return people;
      }, []),
      takeLast(url.length)
    );

  }

}
