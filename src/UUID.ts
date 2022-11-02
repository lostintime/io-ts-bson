import * as bson from 'bson';
import * as t from 'io-ts';

export const UUID = new t.Type<bson.UUID, bson.UUID, unknown>(
  'UUID',
  (u): u is bson.UUID => u instanceof bson.UUID,
  (i, c) => {
    try {
      if (i instanceof bson.UUID) {
        return t.success(i);
      } else if (i instanceof bson.Binary && i.sub_type === bson.Binary.SUBTYPE_UUID) {
        return t.success(i.toUUID());
      } else {
        return t.failure(i, c, `Failed to decode UUID: bson.UUID | bson.Binary(sub_type=4) expected, got ${typeof i}`);
      }
    } catch (e) {
      return t.failure(i, c, `Failed to decode UUID: ${e}`);
    }
  },
  t.identity,
);

export type UUID = bson.UUID;
