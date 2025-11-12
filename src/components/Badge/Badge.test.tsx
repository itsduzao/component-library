import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';
import type { BadgeColor } from './Badge.types';

describe('Badge Component', () => {
  it('renders with default props', () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText('Test');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('square', 'gray');
  });

  it('renders with pill format', () => {
    render(<Badge format="pill">Pill Badge</Badge>);
    const badge = screen.getByText('Pill Badge');
    expect(badge).toHaveClass('pill');
  });

  it('renders with different colors', () => {
    const colors: BadgeColor[] = ['red', 'blue', 'green'];
    
    colors.forEach(color => {
      const { container } = render(<Badge color={color}>{color}</Badge>);
      expect(container.firstChild).toHaveClass(`${color}`);
    });
  });
});
