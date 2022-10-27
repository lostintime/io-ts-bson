import * as bson from 'bson';
import * as t from 'io-ts';

export const NumberFromLong = new t.Type<number, bson.Long, unknown>(
  'NumberFromLong',
  t.number.is,
  (i, c) => {
    try {
      if (t.number.is(i)) {
        return t.success(i);
      } else if (i instanceof bson.Long) {
        return t.success(i.toNumber());
      } else {
        return t.failure(i, c, `Failed to decode NumberFromInt32: bson.Long | number expected, got ${typeof i}`);
      }
    } catch (e: unknown) {
      return t.failure(i, c, `Failed to decode NumberFromInt32: ${e}`);
    }
  },
  (a) => bson.Long.fromNumber(a),
);
