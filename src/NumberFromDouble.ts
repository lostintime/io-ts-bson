import * as bson from 'bson';
import * as t from 'io-ts';

export const NumberFromDouble = new t.Type<number, bson.Double, unknown>(
  'NumberFromDouble',
  t.number.is,
  (i, c) => {
    try {
      if (t.number.is(i)) {
        return t.success(i);
      } else if (i instanceof bson.Double) {
        return t.success(i.valueOf());
      } else {
        return t.failure(i, c, `Failed to decode NumberFromDouble: bson.Double | number expected, got ${typeof i}`);
      }
    } catch (e: unknown) {
      return t.failure(i, c, `Failed to decode NumberFromDouble: ${e}`);
    }
  },
  (a) => new bson.Double(a),
);
