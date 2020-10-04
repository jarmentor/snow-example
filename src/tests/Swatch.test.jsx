import * as React from 'react'
import { render } from '@testing-library/react'
import Swatch from '../components/Swatch/Swatch'

test('renders swatch', () => {
  const { getByText } = render(<Swatch color="red" />)
  const redEl = getByText(/red/i)
  expect(redEl).toBeInTheDocument()
})

