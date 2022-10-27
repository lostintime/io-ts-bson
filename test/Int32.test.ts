import { Int32 } from '../src/Int32';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Int32', () => {
  it('decodes from a number', () => {
    expect(Int32.decode(12)).deep.equals(t.success(12));
  });

  it('decodes from a bson.Int32', () => {
    expect(Int32.decode(new bson.Int32(12))).deep.equals(t.success(12));
  });

  it('encodes to bson.Int32', () => {
    expect(Int32.encode(12)).deep.equals(new bson.Int32(12));
  });
});
