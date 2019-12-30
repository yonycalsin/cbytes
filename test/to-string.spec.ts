import { toString } from '../lib/to-string';

/**
 * FROM: 2936012.8
 * TO: 2.8MB
 */
test('2936012.8 to 2.8MB', () => {
    expect(toString(2936012.8)).toBe('2.8MB');
});

/**
 * FROM: 2199023255552
 * TO: 2TB
 */
test('2199023255552 to 2TB', () => {
    expect(toString(2199023255552)).toBe('2TB');
});
