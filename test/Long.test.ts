import { Long } from '../src/Long';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Long', () => {
  it('decodes from a number', () => {
    expect(Long.decode(10)).deep.equals(t.success(10));
  });

  it('decodes from a bson.Long', () => {
    expect(Long.decode(bson.Long.fromNumber(10))).deep.equals(t.success(10));
  });

  it('encodes to bson.Long', () => {
    expect(Long.encode(10)).deep.equals(bson.Long.fromNumber(10));
  });
});
