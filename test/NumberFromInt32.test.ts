import { NumberFromInt32 } from '../src/NumberFromInt32';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('NumberFromInt32', () => {
  it('decodes from a number', () => {
    expect(NumberFromInt32.decode(12)).deep.equals(t.success(12));
  });

  it('decodes from a bson.Int32', () => {
    expect(NumberFromInt32.decode(new bson.Int32(12))).deep.equals(t.success(12));
  });

  it('encodes to bson.Int32', () => {
    expect(NumberFromInt32.encode(12)).deep.equals(new bson.Int32(12));
  });
});
