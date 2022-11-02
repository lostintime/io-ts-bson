import * as t from 'io-ts';

export interface NumericStringBrand {
  readonly NumericString: unique symbol;
}

export type NumericString = t.Branded<string, NumericStringBrand>;

/**
 * NumericString type guard
 */
export const isNumericString = (u: unknown): u is NumericString => t.string.is(u) && /^\d+$/.test(u);

export const NumericString = new t.Type<NumericString, string, unknown>(
  'NumericString',
  isNumericString,
  (u, c) =>
    isNumericString(u) ? t.success(u) : t.failure(u, c, 'Failed to decode NumericString: /^\\d+$/ string expected'),
  t.identity,
);
