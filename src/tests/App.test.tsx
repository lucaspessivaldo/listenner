import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import {
  RouterProvider,
  createMemoryRouter
} from "react-router-dom";

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

describe('App', () => {
  it('renders the Footer component', () => {
    render(<Footer />)
    const footerText = screen.getByText(/The source code is available on/i)
    expect(footerText).toBeInTheDocument()
  })
})


test('Navbar displays "Get Started" button on homepage', async () => {
  const routesConfig = [
    {
      path: "/",
      element: <Navbar />,
    },
  ]

  const currentPage = createMemoryRouter(routesConfig, {
    initialEntries: ["/"]
  })

  render(<RouterProvider router={currentPage} />);
  const footerText = screen.getByText(/Get Started/i)
  expect(footerText).toBeInTheDocument()
})
