import { ObjectId } from './ObjectId';
import * as bson from 'bson';
import * as t from 'io-ts';

export interface ObjectIdStringBrand {
  readonly ObjectIdString: unique symbol;
}

export type ObjectIdString = t.Branded<string, ObjectIdStringBrand>;

/**
 * ObjectIdString type guard
 */
export const isObjectIdString = (id: string): id is ObjectIdString => /^[a-f\d]{24}$/i.test(id);

/**
 * Decode {@link ObjectIdString} from {@link bson.ObjectId}
 */
export const ObjectIdString = ObjectId.pipe(
  new t.Type<ObjectIdString, bson.ObjectId, bson.ObjectId>(
    'ObjectIdString',
    (u): u is ObjectIdString => t.string.is(u) && isObjectIdString(u),
    (u, c) => t.success(u.toHexString() as ObjectIdString),
    (id) => bson.ObjectId.createFromHexString(id),
  ),
);
