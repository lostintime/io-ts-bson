import * as bson from 'bson';
import * as t from 'io-ts';

export const Binary = new t.Type<bson.Binary, bson.Binary, unknown>(
  'Binary',
  (u): u is bson.Binary => u instanceof bson.Binary,
  (u, c) => (u instanceof bson.Binary ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type Binary = bson.Binary;
