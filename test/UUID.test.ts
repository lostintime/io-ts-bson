import { UUID } from '../src/UUID';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('UUID', () => {
  it('decodes from a UUID', () => {
    const b = new bson.UUID();
    expect(UUID.decode(b)).deep.equals(t.success(b));
  });

  it('decodes from a Binary', () => {
    const u = new bson.UUID();
    const b = u.toBinary();
    expect(UUID.decode(b)).deep.equals(t.success(u));
  });

  it('encodes to UUID', () => {
    const b = new bson.UUID();
    expect(UUID.encode(b)).equals(b);
  });
});
