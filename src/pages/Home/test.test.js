import { render, screen } from '@testing-library/react';
import NotFound from '.';

test('renders learn react link', () => {
  render(<NotFound />);
  const element = screen.getByText(/Página não encontrada/i);
  expect(element).toBeInTheDocument();
});

