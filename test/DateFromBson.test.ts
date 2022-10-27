import { DateFromBson } from '../src/DateFromBson';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('Date', () => {
  it('decodes from a Date', () => {
    const now = new Date();
    expect(DateFromBson.decode(now)).deep.equals(t.success(now));
  });
});
