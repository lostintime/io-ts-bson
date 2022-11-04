import { Timestamp } from '../src/Timestamp';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Timestamp', () => {
  it('decodes from an Timestamp', () => {
    const o = bson.Timestamp.fromNumber(10);
    expect(Timestamp.decode(o)).deep.equals(t.success(o));
  });

  it('encodes to Timestamp', () => {
    const o = bson.Timestamp.fromNumber(20);
    expect(Timestamp.encode(o)).equals(o);
  });
});
