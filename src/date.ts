import * as tt from 'io-ts-types/lib/date';

/**
 * A codec for a Date that is stored as a BSON date in MongoDB.
 */
export const date = tt.date;
