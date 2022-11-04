import { Binary } from '../src/Binary';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Binary', () => {
  it('decodes from a Binary', () => {
    const b = new bson.Binary();
    expect(Binary.decode(b)).deep.equals(t.success(b));
  });

  it('encodes to Binary', () => {
    const b = new bson.Binary();
    expect(Binary.encode(b)).equals(b);
  });
});
