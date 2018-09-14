import library from '../lib/index';
import path from 'path';
import assert from 'assert';

import { readFileSync } from 'fs';

const beforeBasic = readFileSync(
  path.join(__dirname, 'before/basic.txt'),
  'utf8'
);
const afterBasic = readFileSync(
  path.join(__dirname, 'after/basic.txt'),
  'utf8'
);

describe('library', () => {
  it('returns the provided text', () => {
    assert.equal(library(beforeBasic), afterBasic);
  });
});
