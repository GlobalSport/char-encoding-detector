import Match from './match';

export type Context = {
  fByteStats: number[];
  fC1Bytes: boolean;
  fRawInput: Uint8Array;
  fRawLength: number;
  fInputBytes: Uint8Array;
  fInputLen: number;
};

export interface Recognizer {
  name: (context?: Context) => string;
  language?: () => string;
  match: (context: Context) => Match;
}

export type Options = {
  allMatches: boolean;
};
