import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import Footer from '../components/Footer'

describe('App', () => {
  it('renders the Footer component', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('Vercel')).toBeInTheDocument();
  })
})
