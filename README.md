![travis static](https://travis-ci.com/GlobalSport/js-chardet.svg?branch=master)

=====

Port of [node-chardet](https://github.com/runk/node-chardet) in pure JavaScript without NodeJS specific code.
Module is based on ICU project http://site.icu-project.org/, which uses character
occurrence analysis to determine the most probable encoding.

## Installation

```
npm i char-encoding-detector
```

```
yarn add char-encoding-detector
```

## Usage

To return the encoding with the highest confidence:

```javascript
import { detectEncoding, detectFileEncoding } from 'char-encoding-detector';
const encoding = detectEncoding(uint8Array);
// or
detectFileEncoding(file).then((encoding) => {});
```

To return the full list of possible encodings:

```javascript
import { detectEncoding, detectFileEncoding } from 'char-encoding-detector';

const matches = detectEncoding(uint8Array, { allMatches: true });
// or
detectFileEncoding(file, { allMatches: true }).then((matches) => {});
```

## Working with large data sets

Sometimes, when data set is huge and you want to optimize performance (in tradeoff of less accuracy), you can sample only first N bytes of the buffer.

## Supported Encodings:

- UTF-8
- UTF-16 LE
- UTF-16 BE
- UTF-32 LE
- UTF-32 BE
- ISO-2022-JP
- ISO-2022-KR
- ISO-2022-CN
- Shift-JIS
- Big5
- EUC-JP
- EUC-KR
- GB18030
- ISO-8859-1
- ISO-8859-2
- ISO-8859-5
- ISO-8859-6
- ISO-8859-7
- ISO-8859-8
- ISO-8859-9
- windows-1250
- windows-1251
- windows-1252
- windows-1253
- windows-1254
- windows-1255
- windows-1256
- KOI8-R
