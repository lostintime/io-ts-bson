import { BSONRegExp } from '../src/BSONRegExp';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('BSONRegExp', () => {
  it('decodes from an BSONRegExp', () => {
    const o = new bson.BSONRegExp('/\\d+/i');
    expect(BSONRegExp.decode(o)).deep.equals(t.success(o));
  });

  it('encodes to BSONRegExp', () => {
    const o = new bson.BSONRegExp('/\\d+/i');
    expect(BSONRegExp.encode(o)).equals(o);
  });
});
