import { detect } from '../chardet.test';

describe('UTF-8', function() {
  it('should return UTF-8', function() {
    expect(detect(__dirname + '/../data/encodings/utf8')).toEqual('UTF-8');
  });
});
