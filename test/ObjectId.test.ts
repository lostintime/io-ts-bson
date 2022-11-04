import { ObjectId } from '../src/ObjectId';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('ObjectId', () => {
  it('decodes from an ObjectId', () => {
    const o = new bson.ObjectId();
    expect(ObjectId.decode(o)).deep.equals(t.success(o));
  });

  it('encodes to ObjectId', () => {
    const o = new bson.ObjectId();
    expect(ObjectId.encode(o)).equals(o);
  });

  it('fails to decode from non ObjectId values', () => {
    const n = Number(20);
    const r = ObjectId.decode(n);
    expect(r._tag).equals('Left');
  });

  it('returns true for ObjectId values to is function', () => {
    const o = new bson.ObjectId();
    expect(ObjectId.is(o)).is.true;
  });

  it('returns false for non ObjectId values to is function', () => {
    const n = Number(10);
    expect(ObjectId.is(n)).is.false;
    expect(ObjectId.is(10)).is.false;
  });
});
