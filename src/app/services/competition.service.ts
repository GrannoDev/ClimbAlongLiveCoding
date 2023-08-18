import { inject, Injectable } from '@angular/core';
import { StateService } from './state.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../model/competition';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  private state = inject(StateService);
  private http = inject(HttpClient);
  constructor(private activatedRoute: ActivatedRoute) {
    this.state
      .observe('apiUrl')
      .pipe(
        takeUntilDestroyed(),
        switchMap((url) => (url ? this.http.get<Competition[]>(url) : of([]))),
        catchError((err) =>
          throwError(() => `An error occurred: ${err.error.message}`)
        )
      )
      .subscribe((competitions) =>
        this.state.set('competitions', competitions)
      );

    this.state
      .observe('wantedCompetitionId')
      .pipe(
        takeUntilDestroyed(),
        switchMap((id) =>
          this.state
            .observe('competitions')
            .pipe(
              map((competitions) =>
                competitions.find(
                  (competition) => competition.competitionId === id
                )
              )
            )
        )
      )
      .subscribe((competition) =>
        this.state.set('selectedCompetition', competition)
      );
  }

  setWantedId(id: number) {
    this.state.set('wantedCompetitionId', id);
  }
}
