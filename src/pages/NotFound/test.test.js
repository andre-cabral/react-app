import { render, screen } from '@testing-library/react';
import NotFound from '.';

test('renders page not found text', () => {
  render(<NotFound />);
  const element = screen.getByText(/Página não encontrada/i);
  expect(element).toBeInTheDocument();
});

