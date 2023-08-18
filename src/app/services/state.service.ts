import { Injectable } from '@angular/core';
import { ObservableStore } from '@northtech/ratatosk';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root',
})
export class StateService extends ObservableStore<State> {
  constructor() {
    super({
      competitions: [],
      wantedCompetitionId: undefined,
      selectedCompetition: undefined,
    });
    this.set('apiUrl', 'https://test.comp.climbalong.com/api/v0/competitions');
  }
}
