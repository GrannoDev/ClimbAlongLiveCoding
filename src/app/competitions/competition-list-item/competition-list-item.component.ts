import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeepReadonly } from 'ts-essentials';
import { Competition } from '../../model/competition';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ca-competition-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competition-list-item.component.html',
})
export class CompetitionListItemComponent {
  @Input({ required: true }) competition: DeepReadonly<Competition> | undefined;
}
