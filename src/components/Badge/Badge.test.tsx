import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';
import { BADGE_COLORS, BADGE_FORMATS } from './Badge.constants';

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('renders content correctly', () => {
      render(<Badge>Test</Badge>);
      
      const badge = screen.getByText('Test');
      expect(badge).toBeInTheDocument();
    });

    it('renders with default props (square and gray)', () => {
      const { container } = render(<Badge>Default</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('square');
      expect(badge).toHaveClass('gray');
    });

    it('renders content with long text', () => {
      const longText = 'This is a very long text for a badge';
      render(<Badge>{longText}</Badge>);
      
      const badge = screen.getByText(longText);
      expect(badge).toBeInTheDocument();
    });

    it('renders content with numbers', () => {
      render(<Badge>{42}</Badge>);
      
      const badge = screen.getByText('42');
      expect(badge).toBeInTheDocument();
    });

    it('renders content with special characters', () => {
      render(<Badge>{'New! & "Special"'}</Badge>);
      
      const badge = screen.getByText('New! & "Special"');
      expect(badge).toBeInTheDocument();
    });

    it('renders empty content', () => {
      const { container } = render(<Badge>{''}</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toBeInTheDocument();
      expect(badge?.textContent).toBe('');
    });

    it('renders zero', () => {
      render(<Badge>{0}</Badge>);
      
      const badge = screen.getByText('0');
      expect(badge).toBeInTheDocument();
    });

    it('renders emoji', () => {
      render(<Badge>🎉 New</Badge>);
      
      const badge = screen.getByText('🎉 New');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Formats', () => {
    it('applies square format', () => {
      const { container } = render(<Badge format="square">Square</Badge>);
      
      const badge = container.querySelector('.square');
      expect(badge).toBeInTheDocument();
    });

    it('applies pill format', () => {
      const { container } = render(<Badge format="pill">Pill</Badge>);
      
      const badge = container.querySelector('.pill');
      expect(badge).toBeInTheDocument();
    });

    it('works with all formats', () => {
      BADGE_FORMATS.forEach(format => {
        const { container, unmount } = render(<Badge format={format}>{format}</Badge>);
        
        const badge = container.querySelector(`.${format}`);
        expect(badge).toBeInTheDocument();
        
        unmount();
      });
    });
  });

  describe('Colors', () => {
    it('applies gray color (default)', () => {
      const { container } = render(<Badge>Gray</Badge>);
      
      const badge = container.querySelector('.gray');
      expect(badge).toBeInTheDocument();
    });

    it('applies red color', () => {
      const { container } = render(<Badge color="red">Red</Badge>);
      
      const badge = container.querySelector('.red');
      expect(badge).toBeInTheDocument();
    });

    it('applies blue color', () => {
      const { container } = render(<Badge color="blue">Blue</Badge>);
      
      const badge = container.querySelector('.blue');
      expect(badge).toBeInTheDocument();
    });

    it('works with all colors', () => {
      BADGE_COLORS.forEach(color => {
        const { container, unmount } = render(<Badge color={color}>{color}</Badge>);
        
        const badge = container.querySelector(`.${color}`);
        expect(badge).toBeInTheDocument();
        
        unmount();
      });
    });
  });

  describe('CSS Classes', () => {
    it('has base badge class', () => {
      const { container } = render(<Badge>Test</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toBeInTheDocument();
    });

    it('applies three classes (badge + format + color)', () => {
      const { container } = render(<Badge format="pill" color="blue">Test</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge?.classList.length).toBe(3);
      expect(badge).toHaveClass('badge', 'pill', 'blue');
    });

    it('has display inline-block via CSS', () => {
      const { container } = render(<Badge>Display</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('badge');
    });
  });

  describe('Accessibility', () => {
    it('has role="status"', () => {
      render(<Badge>Status Badge</Badge>);
      
      const badge = screen.getByRole('status');
      expect(badge).toBeInTheDocument();
    });

    it('has descriptive aria-label with default color', () => {
      render(<Badge>New</Badge>);
      
      const badge = screen.getByLabelText('gray badge: New');
      expect(badge).toBeInTheDocument();
    });

    it('has descriptive aria-label with custom color', () => {
      render(<Badge color="red">Urgent</Badge>);
      
      const badge = screen.getByLabelText('red badge: Urgent');
      expect(badge).toBeInTheDocument();
    });

    it('has correct aria-label for each color', () => {
      BADGE_COLORS.forEach(color => {
        const { unmount } = render(<Badge color={color}>Test</Badge>);
        
        const badge = screen.getByLabelText(`${color} badge: Test`);
        expect(badge).toBeInTheDocument();
        
        unmount();
      });
    });

    it('has aria-label that reflects badge content', () => {
      const content = 'Active Status';
      render(<Badge color="green">{content}</Badge>);
      
      const badge = screen.getByLabelText(`green badge: ${content}`);
      expect(badge).toBeInTheDocument();
    });

    it('has correct aria-label with number', () => {
      render(<Badge color="blue">{99}</Badge>);
      
      const badge = screen.getByLabelText('blue badge: 99');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Props Combinations', () => {
    it('combines pill format with red color', () => {
      const { container } = render(<Badge format="pill" color="red">Error</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('pill');
      expect(badge).toHaveClass('red');
    });

    it('combines square format with blue color', () => {
      const { container } = render(<Badge format="square" color="blue">Info</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('square');
      expect(badge).toHaveClass('blue');
    });

    it('works with all combinations of format and color', () => {
      BADGE_FORMATS.forEach(format => {
        BADGE_COLORS.forEach(color => {
          const { container, unmount } = render(
            <Badge format={format} color={color}>
              {`${format}-${color}`}
            </Badge>
          );
          
          const badge = container.querySelector('.badge');
          expect(badge).toHaveClass(format);
          expect(badge).toHaveClass(color);
          
          unmount();
        });
      });
    });
  });

  describe('DOM Structure', () => {
    it('renders as span element', () => {
      const { container } = render(<Badge>Span Element</Badge>);
      
      const badge = container.querySelector('span.badge');
      expect(badge).toBeInTheDocument();
    });

    it('has correct structure with content', () => {
      const { container } = render(<Badge color="red" format="pill">Content</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge).toBeInTheDocument();
      expect(badge?.tagName).toBe('SPAN');
      expect(badge?.textContent).toBe('Content');
    });
  });

  describe('Props Variations', () => {
    it('works with all formats and colors', () => {
      BADGE_FORMATS.forEach(format => {
        BADGE_COLORS.forEach(color => {
          const { unmount } = render(
            <Badge format={format} color={color}>
              Test
            </Badge>
          );
          
          const badge = screen.getByText('Test');
          expect(badge).toBeInTheDocument();
          
          unmount();
        });
      });
    });

    it('handles very long text', () => {
      const longContent = 'A'.repeat(100);
      render(<Badge>{longContent}</Badge>);
      
      const badge = screen.getByText(longContent);
      expect(badge).toBeInTheDocument();
    });

    it('handles multiple words', () => {
      render(<Badge>Multiple Words Here</Badge>);
      
      const badge = screen.getByText('Multiple Words Here');
      expect(badge).toBeInTheDocument();
    });

    it('handles line breaks in content', () => {
      const { container } = render(<Badge>{'Line 1\nLine 2'}</Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge?.textContent).toBe('Line 1\nLine 2');
    });

    it('preserves whitespace', () => {
      const { container } = render(<Badge>  Multiple  Spaces  </Badge>);
      
      const badge = container.querySelector('.badge');
      expect(badge?.textContent).toBe('  Multiple  Spaces  ');
    });
  });

  describe('Visual Consistency', () => {
    it('maintains consistent classes after re-render', () => {
      const { container, rerender } = render(<Badge color="red">Original</Badge>);
      
      const badgeBefore = container.querySelector('.badge');
      expect(badgeBefore).toHaveClass('red');
      
      rerender(<Badge color="red">Updated</Badge>);
      
      const badgeAfter = container.querySelector('.badge');
      expect(badgeAfter).toHaveClass('red');
    });

    it('updates classes when props change', () => {
      const { container, rerender } = render(<Badge color="red">Test</Badge>);
      
      expect(container.querySelector('.red')).toBeInTheDocument();
      
      rerender(<Badge color="blue">Test</Badge>);
      
      expect(container.querySelector('.blue')).toBeInTheDocument();
      expect(container.querySelector('.red')).not.toBeInTheDocument();
    });

    it('updates format when prop changes', () => {
      const { container, rerender } = render(<Badge format="square">Test</Badge>);
      
      expect(container.querySelector('.square')).toBeInTheDocument();
      
      rerender(<Badge format="pill">Test</Badge>);
      
      expect(container.querySelector('.pill')).toBeInTheDocument();
      expect(container.querySelector('.square')).not.toBeInTheDocument();
    });

    it('updates content when children change', () => {
      const { rerender } = render(<Badge>Initial Content</Badge>);
      
      const initialBadge = screen.getByText('Initial Content');
      expect(initialBadge).toBeInTheDocument();
      
      rerender(<Badge>Updated Content</Badge>);
      
      const updatedBadge = screen.getByText('Updated Content');
      const oldBadge = screen.queryByText('Initial Content');
      expect(updatedBadge).toBeInTheDocument();
      expect(oldBadge).not.toBeInTheDocument();
    });
  });
});
