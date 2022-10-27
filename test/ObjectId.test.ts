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
});
