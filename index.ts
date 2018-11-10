import utf8 from './encoding/utf8';
import * as mbcs from './encoding/mbcs';
import * as unicode from './encoding/unicode';
import * as sbcs from './encoding/sbcs';
import * as iso2022 from './encoding/iso2022';
import { Options, Recognizer } from './type';

const recognisers: Recognizer[] = [
  new utf8(),
  new unicode.UTF_16BE(),
  new unicode.UTF_16LE(),
  new unicode.UTF_32BE(),
  new unicode.UTF_32LE(),
  new mbcs.sjis(),
  new mbcs.big5(),
  new mbcs.euc_jp(),
  new mbcs.euc_kr(),
  new mbcs.gb_18030(),
  new iso2022.ISO_2022_JP(),
  new iso2022.ISO_2022_KR(),
  new iso2022.ISO_2022_CN(),
  new sbcs.ISO_8859_1(),
  new sbcs.ISO_8859_2(),
  new sbcs.ISO_8859_5(),
  new sbcs.ISO_8859_6(),
  new sbcs.ISO_8859_7(),
  new sbcs.ISO_8859_8(),
  new sbcs.ISO_8859_9(),
  new sbcs.windows_1251(),
  new sbcs.windows_1256(),
  new sbcs.KOI8_R(),
];

function readFileContentsAsUint8Array(file): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (evt) => {
      if (reader.readyState !== FileReader.DONE) {
        return;
      }
      if (reader.error) {
        reject(reader.error);
        return;
      }

      resolve(new Uint8Array(reader.result as ArrayBuffer));
    };

    reader.readAsArrayBuffer(file);
  });
}

export function detectEncoding(buffer: Uint8Array, opts?: Options) {
  // Tally up the byte occurence statistics.
  var fByteStats = [];
  for (var i = 0; i < 256; i++) fByteStats[i] = 0;

  for (var i = buffer.length - 1; i >= 0; i--) fByteStats[buffer[i] & 0x00ff]++;

  var fC1Bytes = false;
  for (var i = 0x80; i <= 0x9f; i += 1) {
    if (fByteStats[i] != 0) {
      fC1Bytes = true;
      break;
    }
  }

  var context = {
    fByteStats: fByteStats,
    fC1Bytes: fC1Bytes,
    fRawInput: buffer,
    fRawLength: buffer.length,
    fInputBytes: buffer,
    fInputLen: buffer.length,
  };

  var matches = recognisers
    .map((rec) => rec.match(context))
    .filter((match) => !!match)
    .sort((a, b) => b.confidence - a.confidence);

  if (opts && opts.allMatches === true) {
    return matches;
  } else {
    return matches.length > 0 ? matches[0].name : null;
  }
}

export function detectFileEncoding(file: File, opts?: Options) {
  return readFileContentsAsUint8Array(file).then((content) => detectEncoding(content, opts));
}
