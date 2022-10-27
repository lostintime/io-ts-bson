import { ObjectIdFromBson } from '../src/ObjectIdFromBson';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('ObjectId', () => {
  it('decodes from an ObjectId', () => {
    const o = new bson.ObjectId();
    expect(ObjectIdFromBson.decode(o)).deep.equals(t.success(o));
  });
});
