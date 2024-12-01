import { test, assert, describe } from 'vitest';
import { useScrollProgress } from '../src/useScrollProgress';

describe('useScrollProgress', () => {
  test('is exported properly', () => {
    assert.exists(useScrollProgress);
  });
});
