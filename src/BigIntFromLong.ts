import * as bson from 'bson';
import * as t from 'io-ts';

export const BigIntFromLong = new t.Type<bigint, bson.Long, unknown>(
  'BigIntFromLong',
  t.bigint.is,
  (i, c) => {
    try {
      if (t.bigint.is(i)) {
        return t.success(i);
      } else if (t.number.is(i)) {
        return t.success(BigInt(i));
      } else if (i instanceof bson.Long) {
        return t.bigint.decode(i.toBigInt());
      } else {
        return t.failure(
          i,
          c,
          `Failed to decode BigIntFromLong: bson.Long | number | bigint expected, got ${typeof i}`,
        );
      }
    } catch (e: unknown) {
      return t.failure(i, c, `Failed to decode BigIntFromLong: ${e}`);
    }
  },
  (a) => bson.Long.fromBigInt(a),
);
