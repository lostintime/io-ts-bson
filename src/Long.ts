import * as bson from 'bson';
import * as t from 'io-ts';

export type Long = bson.Long;

export const Long = new t.Type<number, Long, unknown>(
  'Long',
  t.number.is,
  (i, c) => {
    if (t.number.is(i)) {
      return t.success(i);
    } else if (i instanceof bson.Long) {
      return t.success(i.toNumber());
    } else {
      return t.failure(i, c, `Failed to decode Long: bson.Long | number expected, got ${typeof i}`);
    }
  },
  (a) => bson.Long.fromNumber(a),
);
