import { detect } from '../chardet.test';

describe('Singlebyte Character Sets', function() {
  var base = __dirname + '/../data/encodings';

  it('should return ISO-8859-1 (English)', function() {
    expect(detect(base + '/iso88591_en')).toEqual('ISO-8859-1');
  });

  it('should return ISO-8859-2 (Czech)', function() {
    expect(detect(base + '/iso88592_cs')).toEqual('ISO-8859-2');
  });

  // it('should return ISO-8859-3');
  // it('should return ISO-8859-4');

  it('should return ISO-8859-5 (Russian)', function() {
    expect(detect(base + '/iso88595_ru')).toEqual('ISO-8859-5');
  });

  it('should return ISO-8859-6 (Arabic)', function() {
    expect(detect(base + '/iso88596_ar')).toEqual('ISO-8859-6');
  });

  it('should return ISO-8859-7 (Greek)', function() {
    expect(detect(base + '/iso88597_el')).toEqual('ISO-8859-7');
  });

  it('should return ISO-8859-8 (Hebrew)', function() {
    expect(detect(base + '/iso88598_he')).toEqual('ISO-8859-8');
  });

  it('should return ISO-8859-9 (Turkish)', function() {
    expect(detect(base + '/iso88599_tr')).toEqual('ISO-8859-9');
  });

  // it('should return ISO-8859-10');
  // it('should return ISO-8859-11');
  // // iso-8859-12 is abandoned
  // it('should return ISO-8859-13');
  // it('should return ISO-8859-14');
  // it('should return ISO-8859-15');
  // it('should return ISO-8859-16');

  it('should return windows-1250 (Czech)', function() {
    expect(detect(base + '/windows_1250')).toEqual('windows-1250');
  });

  it('should return windows-1251 (Russian)', function() {
    expect(detect(base + '/windows_1251')).toEqual('windows-1251');
  });

  it('should return windows-1252 (English)', function() {
    expect(detect(base + '/windows_1252')).toEqual('windows-1252');
  });

  it('should return windows-1253 (Greek)', function() {
    expect(detect(base + '/windows_1253')).toEqual('windows-1253');
  });

  it('should return windows-1254 (Turkish)', function() {
    expect(detect(base + '/windows_1254')).toEqual('windows-1254');
  });

  it('should return windows-1255 (Hebrew)', function() {
    expect(detect(base + '/windows_1255')).toEqual('windows-1255');
  });

  it('should return windows-1256 (Arabic)', function() {
    expect(detect(base + '/windows_1256')).toEqual('windows-1256');
  });

  it('should return KOI8-R (Russian)', function() {
    expect(detect(base + '/koi8r')).toEqual('KOI8-R');
  });
});
