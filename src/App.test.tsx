import { render, fireEvent } from '@testing-library/react'
import { describe, it } from 'vitest'

import Footer from '../src/components/Footer'

describe('App', () => {
  it('renders the Footer component', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('Vercel')).toBeInTheDocument();
  })
})
