import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the primary Afrinoverse page content', () => {
    render(<App />);

    expect(screen.getAllByText(/Afrinoverse/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Building Systems for Africa's Next Generation/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Explore the Ecosystem'})).toHaveAttribute(
      'href',
      '#ecosystem',
    );
  });

  it('keeps informational cards out of the partnership form', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: 'Ibadan Digital Academy'})).toBeInTheDocument();
    expect(screen.getByText('Learners & Students')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', {name: /Explore partnership opportunities/}),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('button', {name: 'Learners & Students'})).not.toBeInTheDocument();
    expect(screen.queryByRole('button', {name: 'Explore Innovation Lab'})).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('leaves FairwayPro informational', () => {
    render(<App />);
    expect(screen.getByRole('heading', {name: 'FairwayPro'})).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: 'Explore FairwayPro'})).not.toBeInTheDocument();
    expect(screen.queryByRole('link', {name: 'Explore FairwayPro'})).not.toBeInTheDocument();
  });

  it.each([
    ['StitchPro', 'https://stitchpro.com.ng/'],
    ['Digital ToolPro', 'https://digitaltools.ng/'],
  ])('links %s directly to its website', (name, url) => {
    render(<App />);
    const link = screen.getByRole('link', {name: 'Explore ' + name});
    expect(link).toHaveAttribute('href', url);
    fireEvent.click(link);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it.each(['Partner With Us', 'Partner With AFRINOVERSE'])(
    'opens the partnership form from %s',
    (name) => {
      render(<App />);
      fireEvent.click(screen.getAllByRole('button', {name})[0]);
      expect(screen.getByRole('dialog', {name: 'Partner With AFRINOVERSE'})).toBeInTheDocument();
    },
  );
});
