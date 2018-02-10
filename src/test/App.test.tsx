import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { add } from './add';
import 'jest';

test('add(1+2)', () => {
  expect(add(1, 2)).toBe(3);
});
