import * as bson from 'bson';
import * as t from 'io-ts';

export const Decimal128 = new t.Type<bson.Decimal128, bson.Decimal128, unknown>(
  'Decimal128',
  (u): u is bson.Decimal128 => u instanceof bson.Decimal128,
  (u, c) => (u instanceof bson.Decimal128 ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type Decimal128 = bson.Decimal128;
