import { render, screen } from '@testing-library/react';
import PageOne from '.';

test('renders page 1 title', () => {
  render(<PageOne />);
  const linkElement = screen.getByText(/Página 1/i);
  expect(linkElement).toBeInTheDocument();
});

