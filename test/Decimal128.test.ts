import { Decimal128 } from '../src/Decimal128';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Decimal128', () => {
  it('decodes from an Decimal128', () => {
    const o = new bson.Decimal128('0');
    expect(Decimal128.decode(o)).deep.equals(t.success(o));
  });

  it('encodes to Decimal128', () => {
    const o = new bson.Decimal128('1');
    expect(Decimal128.encode(o)).equals(o);
  });
});
