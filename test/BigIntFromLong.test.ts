import { BigIntFromLong } from '../src/BigIntFromLong';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('BigIntFromLong', () => {
  it('decodes from a number', () => {
    expect(BigIntFromLong.decode(10)).deep.equals(t.success(BigInt(10)));
  });

  it('decodes from a BigInt', () => {
    expect(BigIntFromLong.decode(BigInt(10))).deep.equals(t.success(BigInt(10)));
  });

  it('decodes from a bson.Long', () => {
    expect(BigIntFromLong.decode(bson.Long.fromNumber(10))).deep.equals(t.success(BigInt(10)));
  });

  it('encodes to bson.Long', () => {
    expect(BigIntFromLong.encode(BigInt(10))).deep.equals(bson.Long.fromNumber(10));
  });
});
