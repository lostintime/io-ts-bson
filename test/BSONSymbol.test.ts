import { BSONSymbol } from '../src/BSONSymbol';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('BSONSymbol', () => {
  it('decodes from an BSONSymbol', () => {
    const o = new bson.BSONSymbol('foo');
    expect(BSONSymbol.decode(o)).deep.equals(t.success(o));
  });

  it('encodes to BSONSymbol', () => {
    const o = new bson.BSONSymbol('foo');
    expect(BSONSymbol.encode(o)).equals(o);
  });
});
