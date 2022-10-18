import * as t from 'io-ts';
import { date } from 'io-ts-types/lib/date';

/**
 * A codec for a Date that is stored as a BSON date in MongoDB.
 */
export const DateFromBson = new t.Type<Date, Date, unknown>('DateFromBson', date.is, date.validate, date.encode);
