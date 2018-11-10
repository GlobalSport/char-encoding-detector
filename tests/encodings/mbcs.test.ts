import { detect } from '../chardet.test';

describe('Multybyte Character Sets', function() {
  var base = __dirname + '/../data/encodings';

  it('should return SHIFT-JIS', function() {
    expect(detect(base + '/shiftjis')).toEqual('Shift-JIS');
  });

  it('should return GB18030', function() {
    expect(detect(base + '/gb18030')).toEqual('GB18030');
  });

  it('should return Big5', function() {
    expect(detect(base + '/big5')).toEqual('Big5');
  });

  it('should return EUC-JP', function() {
    expect(detect(base + '/euc_jp')).toEqual('EUC-JP');
  });

  it('should return EUC-KR', function() {
    expect(detect(base + '/euc_kr')).toEqual('EUC-KR');
  });
});
