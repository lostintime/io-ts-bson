import * as bson from 'bson';
import * as t from 'io-ts';

export const BSONRegExp = new t.Type<bson.BSONRegExp, bson.BSONRegExp, unknown>(
  'BSONRegExp',
  (u): u is bson.BSONRegExp => u instanceof bson.BSONRegExp,
  (u, c) => (u instanceof bson.BSONRegExp ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type BSONRegExp = bson.BSONRegExp;
