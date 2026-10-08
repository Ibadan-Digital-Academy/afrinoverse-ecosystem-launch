import {existsSync} from 'node:fs';
import path from 'node:path';
import {fireEvent, render, screen, within} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import App from './App';
import {Footer} from './components/Footer';

describe('Footer copyright year', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows the current year rather than a hard-coded one', () => {
    vi.useFakeTimers({toFake: ['Date']});
    vi.setSystemTime(new Date('2031-03-01T12:00:00Z'));

    render(<Footer onOpenPartner={() => {}} onOpenLegal={() => {}} />);

    expect(screen.getByText('© 2031 AFRINOVERSE. All rights reserved.')).toBeInTheDocument();
    expect(screen.queryByText(/2025/)).not.toBeInTheDocument();
  });

  it('follows the clock when rendered in a later year', () => {
    vi.useFakeTimers({toFake: ['Date']});
    vi.setSystemTime(new Date('2040-01-01T00:30:00Z'));

    render(<Footer onOpenPartner={() => {}} onOpenLegal={() => {}} />);

    expect(screen.getByText('© 2040 AFRINOVERSE. All rights reserved.')).toBeInTheDocument();
  });
});

describe('Coworking section', () => {
  it('presents the coworking offer with its spaces', () => {
    render(<App />);

    const section = screen.getByRole('region', {name: 'A place to come and work.'});
    expect(section).toHaveAttribute('id', 'coworking');
    expect(within(section).getByText(/coworking space you can rent/i)).toBeInTheDocument();
    for (const audience of [
      'Remote workers',
      'Students',
      'Freelancers',
      'Startups',
      'Small teams',
    ]) {
      expect(within(section).getByText(audience)).toBeInTheDocument();
    }
    for (const space of ['Desk workspace', 'Meeting room', 'Lounge area']) {
      expect(within(section).getByRole('heading', {level: 3, name: space})).toBeInTheDocument();
    }
  });

  it('only references images that exist in public/ and gives each one alt text', () => {
    render(<App />);

    const section = screen.getByRole('region', {name: 'A place to come and work.'});
    const images = within(section).getAllByRole('img');
    expect(images).toHaveLength(4);
    for (const image of images) {
      expect(image.getAttribute('alt')?.length).toBeGreaterThan(10);
      const src = image.getAttribute('src') ?? '';
      expect(src).toMatch(/^\/[a-z0-9-]+\.jpg$/);
      expect(existsSync(path.resolve(process.cwd(), 'public', src.slice(1)))).toBe(true);
    }
  });

  it('is reachable from the main navigation', () => {
    render(<App />);

    const nav = screen.getByRole('navigation', {name: 'Main navigation'});
    expect(within(nav).getByRole('link', {name: 'Coworking'})).toHaveAttribute(
      'href',
      '#coworking',
    );
  });

  it.each([0, 1])(
    'opens the existing enquiry dialog on the coworking track from CTA %i',
    (index) => {
      render(<App />);

      const section = screen.getByRole('region', {name: 'A place to come and work.'});
      const ctas = within(section).getAllByRole('button', {name: /Enquire About a Space/});
      expect(ctas).toHaveLength(2);

      fireEvent.click(ctas[index]);

      const dialog = screen.getByRole('dialog', {name: 'Partner With AFRINOVERSE'});
      expect(within(dialog).getByLabelText('Collaboration Track')).toHaveValue(
        'Coworking Space (Workspace Rental)',
      );
    },
  );
});
