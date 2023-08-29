export interface TeamDetails {
  id: string;
  name: string;
  shortName: string;
  officialName: string;
  code: string;
  position: string;
  country: {
    id: string;
    name: string;
  };
}

export interface CompetitionDetails {
  coverageLevel: string;
  tournamentCalendar: {
    id: string;
    name: string;
  };
  competition: {
    id: string;
    name: string;
    stage: string;
  };
  venue: {
    id: string;
    name: string;
  };
}

export interface TeamStats {
  fh: string;
  sh: string;
  type: string;
  value: string;
}

export interface MatchDetails {
  scores: {
    ht: {
      home: number;
      away: number;
    };
    ft: {
      home: number;
      away: number;
    };
    total: {
      home: number;
      away: number;
    };
  };
}

export interface APIResponse {
  match: {
    contestant: TeamDetails[];
    liveData: {
      lineups: {
        home: {
          stats: TeamStats[];
        };
        away: {
          stats: TeamStats[];
        };
      };
      matchDetails: MatchDetails;
    };
    meta: CompetitionDetails;
  };
}
