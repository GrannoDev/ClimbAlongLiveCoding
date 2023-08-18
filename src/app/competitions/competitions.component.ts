import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionService } from '../services/competition.service';
import { map, Observable } from 'rxjs';
import { Competition } from '../model/competition';
import { StateService } from '../services/state.service';
import { DeepReadonly } from 'ts-essentials';
import { CompetitionListItemComponent } from './competition-list-item/competition-list-item.component';

@Component({
  selector: 'ca-competitions',
  standalone: true,
  imports: [CommonModule, CompetitionListItemComponent],
  templateUrl: './competitions.component.html',
})
export class CompetitionsComponent {
  #competitionService = inject(CompetitionService);
  #state = inject(StateService);
  competitions: Observable<DeepReadonly<Competition[]>> = this.#state
    .observe('competitions')
    .pipe(
      map((competitions) =>
        competitions.filter((comp) => !!comp.startTime && !!comp.endTime)
      )
    );
}
