export default class Match {
  confidence: number;
  name: string;
  lang: string;

  constructor(det, rec, confidence: number, name?: string, lang?: string) {
    this.confidence = confidence;
    this.name = name || rec.name(det);
    this.lang = lang;
  }
}
