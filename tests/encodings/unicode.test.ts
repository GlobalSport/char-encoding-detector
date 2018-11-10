import { detect } from '../chardet.test';

describe('Unicode', function() {
  var base = __dirname + '/../data/encodings';

  it('should return UTF-16LE', function() {
    expect(detect(base + '/utf16le')).toEqual('UTF-16LE');
  });

  it('should return UTF-16BE', function() {
    expect(detect(base + '/utf16be')).toEqual('UTF-16BE');
  });

  it('should return UTF-32LE', function() {
    expect(detect(base + '/utf32le')).toEqual('UTF-32LE');
  });

  it('should return UTF-32BE', function() {
    expect(detect(base + '/utf32be')).toEqual('UTF-32BE');
  });
});
