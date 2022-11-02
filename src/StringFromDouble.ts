import { NumericString } from './NumericString';
import * as bson from 'bson';
import * as t from 'io-ts';

export const StringFromDouble = new t.Type<NumericString, bson.Double, unknown>(
  'StringFromDouble',
  NumericString.is,
  (i, c) => {
    try {
      if (NumericString.is(i)) {
        return t.success(i);
      } else if (i instanceof bson.Double) {
        return t.success(i.toString() as NumericString);
      } else {
        return t.failure(
          i,
          c,
          `Failed to decode StringFromDouble: bson.Double | NumericString expected, got ${typeof i}`,
        );
      }
    } catch (e: unknown) {
      return t.failure(i, c, `Failed to decode StringFromDouble: ${e}`);
    }
  },
  (a) => new bson.Double(parseInt(a, 10)),
);
