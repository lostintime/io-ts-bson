import { NumberFromLong } from '../src/NumberFromLong';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('NumberFromLong', () => {
  it('decodes from a number', () => {
    expect(NumberFromLong.decode(10)).deep.equals(t.success(10));
  });

  it('decodes from a bson.Long', () => {
    expect(NumberFromLong.decode(bson.Long.fromNumber(10))).deep.equals(t.success(10));
  });

  it('encodes to bson.Long', () => {
    expect(NumberFromLong.encode(10)).deep.equals(bson.Long.fromNumber(10));
  });
});
