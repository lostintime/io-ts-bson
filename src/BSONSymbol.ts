import * as bson from 'bson';
import * as t from 'io-ts';

export const BSONSymbol = new t.Type<bson.BSONSymbol, bson.BSONSymbol, unknown>(
  'BSONSymbol',
  (u): u is bson.BSONSymbol => u instanceof bson.BSONSymbol,
  (u, c) => (u instanceof bson.BSONSymbol ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type BSONSymbol = bson.BSONSymbol;
