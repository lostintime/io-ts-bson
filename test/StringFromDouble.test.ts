import { NumericString } from '../src/NumericString';
import { StringFromDouble } from '../src/StringFromDouble';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('StringFromDouble', () => {
  it('decodes from a numeric string', () => {
    expect(StringFromDouble.decode('10')).deep.equals(t.success('10'));
  });

  it('decodes from a bson.Double', () => {
    expect(StringFromDouble.decode(new bson.Double(10))).deep.equals(t.success('10'));
  });

  it('encodes to bson.Double', () => {
    expect(StringFromDouble.encode('10' as NumericString)).deep.equals(new bson.Double(10));
  });
});
