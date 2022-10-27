import { ObjectIdString } from '../src/ObjectIdString';
import * as bson from 'bson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('ObjectIdString', () => {
  it('decodes from an ObjectId', () => {
    const o = bson.ObjectId.createFromHexString('635ac5f39d51a41c657c3587');
    expect(ObjectIdString.decode(o)).deep.equals(t.success('635ac5f39d51a41c657c3587'));
  });

  it('encodes to ObjectId', () => {
    const o = bson.ObjectId.createFromHexString('635ac5f39d51a41c657c3587');
    expect(ObjectIdString.encode('635ac5f39d51a41c657c3587' as ObjectIdString).equals(o)).is.true;
  });
});
