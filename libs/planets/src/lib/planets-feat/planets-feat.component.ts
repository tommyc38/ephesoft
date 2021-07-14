import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetService } from '@ephesoft/planet-data';
import { Person, Planet, Response } from '@ephesoft/utilities';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PeopleService } from '@ephesoft/people-data';

@Component({
  selector: 'planet-feat',
  templateUrl: './planets-feat.component.html',
  styleUrls: ['./planets-feat.component.scss']
})
export class PlanetsFeatComponent implements OnInit, OnDestroy {
  planetDetail: Planet | undefined = undefined;
  planetResidentDetail: Person[] | undefined = undefined
  planetResponse: Response<Planet> | undefined;
  hasError: HttpErrorResponse | undefined = undefined
  page = 1
  private _residents:{[planetUrl:string]:Person[]} = {}
  private _paramSubscription: Subscription = Subscription.EMPTY;

  constructor(
    public planetService: PlanetService,
    public peopleService: PeopleService,
    public route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {

    this._paramSubscription = this.route.paramMap.pipe(
      switchMap(params => {
        this.page = +(params.get('page') ?? 1);
        return this.planetService.getPlanets(this.page).pipe(
          catchError(err => {
            this.hasError = err
            return of(undefined)
          })
        );
      }),
      tap(response => this.planetResponse = response)
    ).subscribe();
  }

  navigateToPage(url: string | null){
    if (!this.planetResponse) return;
    const page = this.planetService.getPageFromUrl(url);
    if (page){
      this.router.navigate([`/planets/${page}`])
    }
  }

  trackByFn(index:number, planet:Planet){
    return planet.url
  }

  ngOnDestroy(): void {
    this._paramSubscription.unsubscribe();
  }

  setPlanet(planet: Planet): void{
    if(this._residents[planet.url]){
      this.planetResidentDetail = this._residents[planet.url]
    }
    this.peopleService.getManyPeople(planet.residents).subscribe( people => {
      this._residents[planet.url] = people
      this.planetResidentDetail = people
      this.planetDetail = planet
    })


  }

}
