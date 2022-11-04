import * as bson from 'bson';
import * as t from 'io-ts';

export const Timestamp = new t.Type<bson.Timestamp, bson.Timestamp, unknown>(
  'Timestamp',
  (u): u is bson.Timestamp => u instanceof bson.Timestamp,
  (u, c) => (u instanceof bson.Timestamp ? t.success(u) : t.failure(u, c)),
  t.identity,
);

export type Timestamp = bson.Timestamp;
