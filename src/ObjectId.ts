import * as bson from 'bson';
import * as t from 'io-ts';

export const ObjectId = new t.Type<bson.ObjectId, bson.ObjectId, unknown>(
  'ObjectId',
  (u): u is bson.ObjectId => u instanceof bson.ObjectId,
  (u, c) => (u instanceof bson.ObjectId ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type ObjectId = bson.ObjectId;
