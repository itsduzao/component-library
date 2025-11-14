import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Banner } from './Banner';
import { BANNER_STATUSES } from './Banner.constants';
import { BANNER_CONFIG } from './Banner.config';

describe('Banner Component', () => {
    describe('Rendering', () => {
        it('renders Banner title properly', () => {
            render(<Banner status='success' title='Success' />);
            const titleElement = screen.getByText('Success');
            expect(titleElement).toBeInTheDocument();
        });

        it('renders Banner content when provided', () => {
            render(<Banner status='info' title='Info' content='This is an info banner.' />);
            const contentElement = screen.getByText('This is an info banner.');
            expect(contentElement).toBeInTheDocument();
        });

        it('does NOT renders Banner content when not provided', () => {
            const { container } = render(<Banner status='warning' title='Warning' />);
            const contentElement = container.querySelector('.banner-content');
            expect(contentElement).not.toBeInTheDocument();
        });

        it('render icon properly for each status', () => {
            BANNER_STATUSES.forEach((status) => {
                const { container, unmount } = render(<Banner status={status} title={status} />);
                const iconElement = container.querySelector('svg');
                expect(iconElement).toBeInTheDocument();
                unmount();
            });
        });
    });

    describe('CSS Classes', () => {
        it('applies correct status class for each status', () => {
            BANNER_STATUSES.forEach((status) => {
                const { container, unmount } = render(<Banner status={status} title='Test' />);
                const bannerElement = container.querySelector(`.banner-${status}`);
                expect(bannerElement).toBeInTheDocument();
                unmount();
            });
        });

        it('has base banner-wrapper class', () => {
            const { container } = render(<Banner status='success' title='Test' />);
            const wrapperElement = container.querySelector('.banner-wrapper');
            expect(wrapperElement).toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('has correct role for success status', () => {
            render(<Banner status='success' title='Success' />);
            const bannerElement = screen.getByRole('status');
            expect(bannerElement).toBeInTheDocument();
        });

        it('has correct role for info status', () => {
            render(<Banner status='info' title='Info' />);
            const bannerElement = screen.getByRole('status');
            expect(bannerElement).toBeInTheDocument();
        });

        it('has correct role for warning status', () => {
            render(<Banner status='warning' title='Warning' />);
            const bannerElement = screen.getByRole('alert');
            expect(bannerElement).toBeInTheDocument();
        });

        it('has correct role for error status', () => {
            render(<Banner status='error' title='Error' />);
            const bannerElement = screen.getByRole('alert');
            expect(bannerElement).toBeInTheDocument();
        });

        it('has aria-live="polite" for non-critical statuses', () => {
            BANNER_STATUSES.forEach((status) => {
                if (BANNER_CONFIG[status].ariaLive === 'polite') {
                    const { container, unmount } = render(<Banner status={status} title='Test' />);
                    const bannerElement = container.querySelector('[aria-live="polite"]');
                    expect(bannerElement).toBeInTheDocument();
                    unmount();
                }
            });
        });

        it('has aria-live="assertive" for critical statuses', () => {
            BANNER_STATUSES.forEach((status) => {
                if (BANNER_CONFIG[status].ariaLive === 'assertive') {
                    const { container, unmount } = render(<Banner status={status} title='Test' />);
                    const bannerElement = container.querySelector('[aria-live="assertive"]');
                    expect(bannerElement).toBeInTheDocument();
                    unmount();
                }
            });
        });

        it('has aria-labelledby pointing to title', () => {
            BANNER_STATUSES.forEach((status) => {
                const { container, unmount } = render(<Banner status={status} title='Test' />);
                const bannerElement = container.querySelector(`[aria-labelledby="banner-title-${status}"]`);
                expect(bannerElement).toBeInTheDocument();
                unmount();
            });
        });

        it('has aria-describedby when content is provided', () => {
            BANNER_STATUSES.forEach((status) => {
                const { container, unmount } = render(<Banner status={status} title='Title' content='Content' />);
                const bannerElement = container.querySelector(`[aria-describedby="banner-content-${status}"]`);
                expect(bannerElement).toBeInTheDocument();
                unmount();
            });
        });

        it('does NOT have aria-describedby when content is not provided', () => {
            BANNER_STATUSES.forEach((status) => {
                const { container, unmount } = render(<Banner status={status} title='Title' />);
                const bannerElement = container.querySelector('.banner-wrapper');
                expect(bannerElement?.getAttribute('aria-describedby')).toBeNull();
                unmount();
            });
        });

        it('icon has appropriate aria-label', () => {
            BANNER_STATUSES.forEach((status) => {
                const { unmount } = render(<Banner status={status} title='Test' />);
                const expectedLabel = status.charAt(0).toUpperCase() + status.slice(1);
                const iconElement = screen.getByLabelText(expectedLabel);
                expect(iconElement).toBeInTheDocument();
                unmount();
            });
        });
    });

    describe('Props Variations', () => {
        it('works with all status types', () => {
            BANNER_STATUSES.forEach((status) => {
                const { unmount } = render(<Banner status={status} title={`${status} title`} />);
                const titleElement = screen.getByText(`${status} title`);
                expect(titleElement).toBeInTheDocument();
                unmount();
            });
        });

        it('handles long title text', () => {
            const longTitle = 'This is a very long title that should still render correctly without any issues';
            render(<Banner status='success' title={longTitle} />);
            const titleElement = screen.getByText(longTitle);
            expect(titleElement).toBeInTheDocument();
        });

        it('handles long content text', () => {
            const longContent = 'This is a very long content that should still render correctly and wrap if needed without breaking the layout';
            render(<Banner status='success' title='Title' content={longContent} />);
            const contentElement = screen.getByText(longContent);
            expect(contentElement).toBeInTheDocument();
        });

        it('handles special characters', () => {
            render(<Banner status='success' title="Title & Test <>" content="Content 'special'" />);
            const titleElement = screen.getByText("Title & Test <>");
            const contentElement = screen.getByText("Content 'special'");
            expect(titleElement).toBeInTheDocument();
            expect(contentElement).toBeInTheDocument();
        });
    });

    describe('DOM Structure', () => {
        it('has correct structure with all elements', () => {
            const { container } = render(<Banner status='success' title='Title' content='Content' />);
            
            const wrapperElement = container.querySelector('.banner-wrapper');
            expect(wrapperElement).toBeInTheDocument();
            
            const iconElement = wrapperElement?.querySelector('svg');
            expect(iconElement).toBeInTheDocument();
            
            const textContainerElement = wrapperElement?.querySelector('.banner-text-container');
            expect(textContainerElement).toBeInTheDocument();
            
            const titleElement = textContainerElement?.querySelector('.banner-title');
            expect(titleElement).toBeInTheDocument();
            
            const contentElement = textContainerElement?.querySelector('.banner-content');
            expect(contentElement).toBeInTheDocument();
        });

        it('has simplified structure without content', () => {
            const { container } = render(<Banner status='success' title='Title' />);
            
            const wrapperElement = container.querySelector('.banner-wrapper');
            expect(wrapperElement).toBeInTheDocument();
            
            const textContainerElement = wrapperElement?.querySelector('.banner-text-container');
            expect(textContainerElement).toBeInTheDocument();
            
            const titleElement = textContainerElement?.querySelector('.banner-title');
            expect(titleElement).toBeInTheDocument();
            
            const contentElement = textContainerElement?.querySelector('.banner-content');
            expect(contentElement).not.toBeInTheDocument();
        });
    });
});