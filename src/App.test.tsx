import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the primary Afrinoverse page content', () => {
    render(<App />);

    expect(screen.getAllByText(/Afrinoverse/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
