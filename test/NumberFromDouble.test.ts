import { NumberFromDouble } from '../src/NumberFromDouble';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('NumberFromDouble', () => {
  it('decodes from a number', () => {
    expect(NumberFromDouble.decode(10)).deep.equals(t.success(10));
  });

  it('decodes from a bson.Double', () => {
    expect(NumberFromDouble.decode(new bson.Double(10))).deep.equals(t.success(10));
  });

  it('encodes to bson.Double', () => {
    expect(NumberFromDouble.encode(10)).deep.equals(new bson.Double(10));
  });
});
