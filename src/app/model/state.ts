import { Competition } from './competition';

export interface State {
  competitions: Competition[];
  wantedCompetitionId: number | undefined;
  selectedCompetition: Competition | undefined;
  apiUrl?: string;
}
