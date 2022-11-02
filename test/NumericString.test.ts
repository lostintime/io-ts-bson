import { NumericString } from '../src/NumericString';
import { expect } from 'chai';
import * as t from 'io-ts';

describe('NumericString', () => {
  it('NumericString from a numeric string )', () => {
    expect(NumericString.decode('123123123123123132123')).deep.equals(t.success('123123123123123132123'));
  });

  it('encodes to string', () => {
    expect(NumericString.encode('123123123123123132123' as NumericString)).equals('123123123123123132123');
  });

  it('fails to decode if there are non-numeric symbols', () => {
    const r = NumericString.decode('123123123123123132123a');
    expect(r._tag).equals('Left');
    if (r._tag === 'Left') {
      expect(r.left[0].message).equals('Failed to decode NumericString: /^\\d+$/ string expected');
    }
  });
});
