import { date } from '../src/date';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('date', () => {
  it('decodes from a Date', () => {
    const now = new Date();
    expect(date.decode(now)).deep.equals(t.success(now));
  });

  it('encodes to Date', () => {
    const now = new Date();
    expect(date.encode(now)).equals(now);
  });
});
