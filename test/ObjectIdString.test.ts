import { isObjectIdString, ObjectIdString } from '../src/ObjectIdString';
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

  describe('isObjectIdString', () => {
    it('returns true for valid ObjectId strings', () => {
      expect(isObjectIdString('635ac5f39d51a41c657c3587')).is.true;
      expect(ObjectIdString.is('635ac5f39d51a41c657c3587')).is.true;
    });

    it('returns false for invalid ObjectId strings', () => {
      expect(isObjectIdString('abc123')).is.false;
      expect(ObjectIdString.is('abc123')).is.false;
    });
  });
});
