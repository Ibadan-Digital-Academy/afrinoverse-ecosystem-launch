import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the primary Afrinoverse page content', () => {
    render(<App />);

    expect(screen.getAllByText(/Afrinoverse/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {level: 1, name: /Building Systems for Africa's Next Generation/i}),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Explore the Ecosystem'})).toHaveAttribute(
      'href',
      '#ecosystem',
    );
  });

  it('opens the existing partnership dialog from a keyboard-accessible ecosystem card', () => {
    render(<App />);

    const academyCard = screen.getByRole('button', {
      name: 'Explore partnership opportunities for Ibadan Digital Academy',
    });
    expect(academyCard).toHaveAttribute('tabindex', '0');

    fireEvent.keyDown(academyCard, {key: 'Enter'});

    expect(screen.getByRole('dialog', {name: 'Partner With AFRINOVERSE'})).toBeInTheDocument();
  });
});
