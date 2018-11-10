import { detect } from '../chardet.test';

describe('ISO-2022', function() {
  var base = __dirname + '/../data/encodings';

  it('should return ISO-2022-JP', function() {
    expect(detect(base + '/iso2022jp')).toEqual('ISO-2022-JP');
  });

  it('should return ISO-2022-KR', function() {
    expect(detect(base + '/iso2022kr')).toEqual('ISO-2022-KR');
  });

  it('should return ISO-2022-CN', function() {
    expect(detect(base + '/iso2022cn')).toEqual('ISO-2022-CN');
  });
});
