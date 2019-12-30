import { toNumber } from '../lib/to-number';

/**
 * FROM: 1KB
 * TO: 1024
 */
test('format 1KB to 1024 ', () => {
    expect(toNumber('1KB')).toBe(1024);
});

/**
 * FROM: 1KB
 * TO: 1024
 */
test('format 1KB to 1024 ', () => {
    expect(toNumber('1KB')).toBe(1024);
});
