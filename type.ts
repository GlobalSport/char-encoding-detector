export interface IMatch {
  confidence: number;
  name: string;
  lang: string;
}

export class Match implements IMatch {
  confidence: number;
  name: string;
  lang: string;
  constructor(det, rec, confidence: number, name?: string, lang?: string) {
    this.confidence = confidence;
    this.name = name || rec.name(det);
    this.lang = lang;
  }
}

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
  match: (context: Context) => IMatch;
}

export type Options = {
  allMatches: boolean;
};
