import * as React from 'react';
import { render } from '@testing-library/react';
import { Swatch } from './Swatch';

test('renders swatch', () => {
  const { getByText } = render(<Swatch color="red" />);
  const redEl = getByText(/red/i);
  expect(redEl).toBeInTheDocument();
});

