import * as bson from 'bson';
import * as t from 'io-ts';

export const NumberFromInt32 = new t.Type<number, bson.Int32, unknown>(
  'NumberFromInt32',
  t.number.is,
  (i, c) => {
    try {
      if (t.number.is(i)) {
        return t.success(i);
      } else if (i instanceof bson.Int32) {
        return t.success(i.value);
      } else {
        return t.failure(i, c, `Failed to decode NumberFromInt32: bson.Int32 | number expected, got ${typeof i}`);
      }
    } catch (e: unknown) {
      return t.failure(i, c, `Failed to decode NumberFromInt32: ${e}`);
    }
  },
  (a) => new bson.Int32(a),
);
