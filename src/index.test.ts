import { describe, expect, it } from 'vitest';

import { greet } from './index.js';

describe('greet', () => {
  it('returns a greeting for the provided name', () => {
    expect(greet('Carl')).toBe('Hello Carl');
  });
});
