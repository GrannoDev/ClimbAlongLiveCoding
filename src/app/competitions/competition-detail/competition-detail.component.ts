import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'ca-competition-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competition-detail.component.html',
})
export class CompetitionDetailComponent {
  private state = inject(StateService);
  private route = inject(ActivatedRoute);
  private competitionService = inject(CompetitionService);

  competition = this.state.observe('selectedCompetition');

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed())
      .subscribe((params) =>
        this.competitionService.setWantedId(Number(params.get('id')))
      );
  }
}
