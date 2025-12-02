import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Testimonial } from "./Testimonial";
import type { ComponentType, SVGProps } from "react";

// Mock company logo for testing
const MockLogo: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg data-testid="mock-logo" {...props}>
    <rect width="48" height="48" fill="#3B82F6" />
  </svg>
);

// Alternative mock logo
const AlternativeLogo: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg data-testid="alternative-logo" {...props}>
    <circle cx="24" cy="24" r="24" fill="#10B981" />
  </svg>
);

describe("Testimonial Component", () => {
  describe("Rendering", () => {
    it("renders Testimonial quote correctly", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Great product!"
          author="John Doe"
          role="CEO"
        />
      );
      const quoteElement = screen.getByText('“Great product!”');
      expect(quoteElement).toBeInTheDocument();
    });

    it("renders Testimonial author correctly", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Amazing service"
          author="Jane Smith"
          role="CTO"
        />
      );
      const authorElement = screen.getByText("Jane Smith");
      expect(authorElement).toBeInTheDocument();
    });

    it("renders Testimonial role correctly", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Excellent"
          author="Bob Johnson"
          role="Product Manager"
        />
      );
      const roleElement = screen.getByText("Product Manager");
      expect(roleElement).toBeInTheDocument();
    });

    it("renders SVG logo when provided", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Test quote"
          author="Test Author"
          role="Test Role"
        />
      );
      const logoElement = screen.getByTestId("mock-logo");
      expect(logoElement).toBeInTheDocument();
    });

    it("renders image logo when string URL is provided", () => {
      render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Test quote"
          author="Test Author"
          role="Test Role"
        />
      );
      const logoElement = screen.getByRole("img", {
        name: "Test Author company logo",
      });
      expect(logoElement).toBeInTheDocument();
      expect(logoElement).toHaveAttribute("src", "https://example.com/logo.png");
    });

    it("renders image logo with custom alt text", () => {
      render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Test quote"
          author="Test Author"
          role="Test Role"
          logoAlt="Custom Company Logo"
        />
      );
      const logoElement = screen.getByAltText("Custom Company Logo");
      expect(logoElement).toBeInTheDocument();
    });

    it("renders with long quote text", () => {
      const longQuote =
        "This is a very long testimonial quote that should still render correctly without any issues and wrap properly within the component boundaries.";
      render(
        <Testimonial
          logo={MockLogo}
          quote={longQuote}
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText(`“${longQuote}”`);
      expect(quoteElement).toBeInTheDocument();
    });

    it("renders with long author name", () => {
      const longName = "Elizabeth Alexandra Mary Windsor-Mountbatten";
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author={longName}
          role="Role"
        />
      );
      const authorElement = screen.getByText(longName);
      expect(authorElement).toBeInTheDocument();
    });

    it("renders with long role description", () => {
      const longRole =
        "Chief Executive Officer and Director of Operations at Global Enterprises Inc.";
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role={longRole}
        />
      );
      const roleElement = screen.getByText(longRole);
      expect(roleElement).toBeInTheDocument();
    });

    it("handles special characters in quote", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote & Test <>"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText('“Quote & Test <>”');
      expect(quoteElement).toBeInTheDocument();
    });

    it("handles special characters in author name", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="O'Connor & Smith"
          role="Role"
        />
      );
      const authorElement = screen.getByText("O'Connor & Smith");
      expect(authorElement).toBeInTheDocument();
    });

    it("handles special characters in role", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="VP of R&D"
        />
      );
      const roleElement = screen.getByText("VP of R&D");
      expect(roleElement).toBeInTheDocument();
    });

    it("renders with emoji in quote", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="🎉 Amazing product!"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText('“🎉 Amazing product!”');
      expect(quoteElement).toBeInTheDocument();
    });

    it("renders with emoji in author", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="👨‍💼 John Doe"
          role="Role"
        />
      );
      const authorElement = screen.getByText("👨‍💼 John Doe");
      expect(authorElement).toBeInTheDocument();
    });

    it("renders with emoji in role", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="CEO 🚀"
        />
      );
      const roleElement = screen.getByText("CEO 🚀");
      expect(roleElement).toBeInTheDocument();
    });

    it("automatically adds quotes to quote text", () => {
      const quote = "This is my testimonial";
      render(
        <Testimonial
          logo={MockLogo}
          quote={quote}
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText(`“${quote}”`);
      expect(quoteElement).toBeInTheDocument();
    });
  });

  describe("CSS Classes", () => {
    it("has base testimonial-container class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const testimonialElement = container.querySelector(
        ".testimonial-container"
      );
      expect(testimonialElement).toBeInTheDocument();
    });

    it("has testimonial-header class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const headerElement = container.querySelector(".testimonial-header");
      expect(headerElement).toBeInTheDocument();
    });

    it("has testimonial-logo class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const logoElement = container.querySelector(".testimonial-logo");
      expect(logoElement).toBeInTheDocument();
    });

    it("has testimonial-quote class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = container.querySelector(".testimonial-quote");
      expect(quoteElement).toBeInTheDocument();
    });

    it("has testimonial-author class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const authorContainer = container.querySelector(".testimonial-author");
      expect(authorContainer).toBeInTheDocument();
    });

    it("has testimonial-author-name class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const authorName = container.querySelector(".testimonial-author-name");
      expect(authorName).toBeInTheDocument();
    });

    it("has testimonial-author-role class", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const authorRole = container.querySelector(".testimonial-author-role");
      expect(authorRole).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("renders as article element", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const articleElement = screen.getByRole("article");
      expect(articleElement).toBeInTheDocument();
    });

    it("has aria-labelledby pointing to author", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="John Doe"
          role="Role"
        />
      );
      const articleElement = container.querySelector(
        '[aria-labelledby="testimonial-author"]'
      );
      expect(articleElement).toBeInTheDocument();
    });

    it("author has correct id for aria-labelledby", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="John Doe"
          role="Role"
        />
      );
      const authorElement = container.querySelector("#testimonial-author");
      expect(authorElement).toBeInTheDocument();
      expect(authorElement?.textContent).toBe("John Doe");
    });

    it("SVG logo container has role='img'", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const logoContainer = container.querySelector('[role="img"]');
      expect(logoContainer).toBeInTheDocument();
    });

    it("SVG logo container has aria-label", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const logoContainer = screen.getByLabelText("Company logo");
      expect(logoContainer).toBeInTheDocument();
    });

    it("SVG logo container has custom aria-label when provided", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
          logoAlt="TechCorp Logo"
        />
      );
      const logoContainer = screen.getByLabelText("TechCorp Logo");
      expect(logoContainer).toBeInTheDocument();
    });

    it('SVG has aria-hidden="true"', () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const svgElement = container.querySelector('svg[aria-hidden="true"]');
      expect(svgElement).toBeInTheDocument();
    });

    it("image logo has appropriate alt text with default", () => {
      render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Jane Smith"
          role="Role"
        />
      );
      const imgElement = screen.getByAltText("Jane Smith company logo");
      expect(imgElement).toBeInTheDocument();
    });

    it("image logo has custom alt text when provided", () => {
      render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
          logoAlt="Custom Logo Alt"
        />
      );
      const imgElement = screen.getByAltText("Custom Logo Alt");
      expect(imgElement).toBeInTheDocument();
    });

    it("quote is rendered as blockquote element", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="This is a testimonial"
          author="Author"
          role="Role"
        />
      );
      const blockquoteElement = container.querySelector("blockquote");
      expect(blockquoteElement).toBeInTheDocument();
      expect(blockquoteElement?.textContent).toBe('“This is a testimonial”');
    });

    it("author name is rendered as paragraph", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="John Doe"
          role="Role"
        />
      );
      const authorParagraph = container.querySelector(
        "p.testimonial-author-name"
      );
      expect(authorParagraph).toBeInTheDocument();
      expect(authorParagraph?.textContent).toBe("John Doe");
    });

    it("role is rendered as paragraph", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Chief Executive Officer"
        />
      );
      const roleParagraph = container.querySelector(
        "p.testimonial-author-role"
      );
      expect(roleParagraph).toBeInTheDocument();
      expect(roleParagraph?.textContent).toBe("Chief Executive Officer");
    });
  });

  describe("DOM Structure", () => {
    it("has correct structure with all elements (SVG logo)", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      const articleElement = container.querySelector(
        "article.testimonial-container"
      );
      expect(articleElement).toBeInTheDocument();

      const headerElement = articleElement?.querySelector(
        ".testimonial-header"
      );
      expect(headerElement).toBeInTheDocument();

      const logoContainer = headerElement?.querySelector(".testimonial-logo");
      expect(logoContainer).toBeInTheDocument();

      const svgElement = logoContainer?.querySelector("svg");
      expect(svgElement).toBeInTheDocument();

      const quoteElement = articleElement?.querySelector(
        "blockquote.testimonial-quote"
      );
      expect(quoteElement).toBeInTheDocument();

      const authorContainer = articleElement?.querySelector(
        ".testimonial-author"
      );
      expect(authorContainer).toBeInTheDocument();

      const authorName = authorContainer?.querySelector(
        "p.testimonial-author-name"
      );
      expect(authorName).toBeInTheDocument();

      const authorRole = authorContainer?.querySelector(
        "p.testimonial-author-role"
      );
      expect(authorRole).toBeInTheDocument();
    });

    it("has correct structure with image logo", () => {
      const { container } = render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      const articleElement = container.querySelector(
        "article.testimonial-container"
      );
      expect(articleElement).toBeInTheDocument();

      const headerElement = articleElement?.querySelector(
        ".testimonial-header"
      );
      expect(headerElement).toBeInTheDocument();

      const imgElement = headerElement?.querySelector("img.testimonial-logo");
      expect(imgElement).toBeInTheDocument();

      const quoteElement = articleElement?.querySelector(
        "blockquote.testimonial-quote"
      );
      expect(quoteElement).toBeInTheDocument();

      const authorContainer = articleElement?.querySelector(
        ".testimonial-author"
      );
      expect(authorContainer).toBeInTheDocument();
    });

    it("header comes before quote", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const articleElement = container.querySelector(
        ".testimonial-container"
      );
      const children = articleElement?.children;

      expect(children?.[0]).toHaveClass("testimonial-header");
      expect(children?.[1]?.tagName).toBe("BLOCKQUOTE");
    });

    it("quote comes before author section", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const articleElement = container.querySelector(
        ".testimonial-container"
      );
      const children = articleElement?.children;

      expect(children?.[1]?.tagName).toBe("BLOCKQUOTE");
      expect(children?.[2]).toHaveClass("testimonial-author");
    });

    it("author name comes before role in author section", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const authorContainer = container.querySelector(".testimonial-author");
      const children = authorContainer?.children;

      expect(children?.[0]).toHaveClass("testimonial-author-name");
      expect(children?.[1]).toHaveClass("testimonial-author-role");
    });
  });

  describe("Logo Behavior", () => {
    it("renders SVG logo component", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const svgLogo = screen.getByTestId("mock-logo");
      expect(svgLogo).toBeInTheDocument();
    });

    it("renders different SVG logo component", () => {
      render(
        <Testimonial
          logo={AlternativeLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const svgLogo = screen.getByTestId("alternative-logo");
      expect(svgLogo).toBeInTheDocument();
    });

    it("SVG logo is wrapped in div with role='img'", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const logoDiv = container.querySelector('div[role="img"]');
      expect(logoDiv).toBeInTheDocument();
      expect(logoDiv).toHaveClass("testimonial-logo");
    });

    it("image logo has correct src attribute", () => {
      const logoUrl = "https://example.com/company-logo.png";
      render(
        <Testimonial
          logo={logoUrl}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const imgElement = screen.getByRole("img", {
        name: "Author company logo",
      });
      expect(imgElement).toHaveAttribute("src", logoUrl);
    });

    it("image logo has testimonial-logo class", () => {
      const { container } = render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
        />
      );
      const imgElement = container.querySelector("img.testimonial-logo");
      expect(imgElement).toBeInTheDocument();
    });
  });

  describe("Props Variations", () => {
    it("works with short quote", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Great!"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText('“Great!”');
      expect(quoteElement).toBeInTheDocument();
    });

    it("works with very long quote", () => {
      const longQuote =
        "This is an extremely long testimonial quote that demonstrates how the component handles substantial amounts of text. It should wrap properly and maintain good readability throughout the entire length of the testimonial, even when the content extends well beyond a typical single-line quote.";
      render(
        <Testimonial
          logo={MockLogo}
          quote={longQuote}
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText(`“${longQuote}”`);
      expect(quoteElement).toBeInTheDocument();
    });

    it("handles numbers in quote", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Increased productivity by 300%"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = screen.getByText('“Increased productivity by 300%”');
      expect(quoteElement).toBeInTheDocument();
    });

    it("handles numbers in author name", () => {
      render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="John Doe III"
          role="Role"
        />
      );
      const authorElement = screen.getByText("John Doe III");
      expect(authorElement).toBeInTheDocument();
    });

    it("handles various company roles", () => {
      const roles = [
        "CEO",
        "Chief Technology Officer",
        "VP of Engineering",
        "Product Manager",
        "Software Engineer",
      ];

      roles.forEach((role) => {
        const { unmount } = render(
          <Testimonial
            logo={MockLogo}
            quote="Quote"
            author="Author"
            role={role}
          />
        );
        const roleElement = screen.getByText(role);
        expect(roleElement).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Visual Consistency", () => {
    it("maintains structure after re-render with same props", () => {
      const { container, rerender } = render(
        <Testimonial
          logo={MockLogo}
          quote="Original Quote"
          author="Original Author"
          role="Original Role"
        />
      );

      const structureBefore = container.innerHTML;

      rerender(
        <Testimonial
          logo={MockLogo}
          quote="Original Quote"
          author="Original Author"
          role="Original Role"
        />
      );

      const structureAfter = container.innerHTML;
      expect(structureAfter).toBe(structureBefore);
    });

    it("updates quote when prop changes", () => {
      const { rerender } = render(
        <Testimonial
          logo={MockLogo}
          quote="Initial Quote"
          author="Author"
          role="Role"
        />
      );

      expect(screen.getByText('“Initial Quote”')).toBeInTheDocument();

      rerender(
        <Testimonial
          logo={MockLogo}
          quote="Updated Quote"
          author="Author"
          role="Role"
        />
      );

      expect(screen.getByText('“Updated Quote”')).toBeInTheDocument();
      expect(screen.queryByText('“Initial Quote”')).not.toBeInTheDocument();
    });

    it("updates author when prop changes", () => {
      const { rerender } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Initial Author"
          role="Role"
        />
      );

      expect(screen.getByText("Initial Author")).toBeInTheDocument();

      rerender(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Updated Author"
          role="Role"
        />
      );

      expect(screen.getByText("Updated Author")).toBeInTheDocument();
      expect(screen.queryByText("Initial Author")).not.toBeInTheDocument();
    });

    it("updates role when prop changes", () => {
      const { rerender } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Initial Role"
        />
      );

      expect(screen.getByText("Initial Role")).toBeInTheDocument();

      rerender(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Updated Role"
        />
      );

      expect(screen.getByText("Updated Role")).toBeInTheDocument();
      expect(screen.queryByText("Initial Role")).not.toBeInTheDocument();
    });

    it("updates logo when prop changes from SVG to image", () => {
      const { rerender } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      expect(screen.getByTestId("mock-logo")).toBeInTheDocument();

      rerender(
        <Testimonial
          logo="https://example.com/new-logo.png"
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      const imgElement = screen.getByRole("img", {
        name: "Author company logo",
      });
      expect(imgElement).toBeInTheDocument();
      expect(screen.queryByTestId("mock-logo")).not.toBeInTheDocument();
    });

    it("updates logo when prop changes from image to SVG", () => {
      const { rerender } = render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      const imgElement = screen.getByRole("img", {
        name: "Author company logo",
      });
      expect(imgElement).toBeInTheDocument();

      rerender(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="Role"
        />
      );

      expect(screen.getByTestId("mock-logo")).toBeInTheDocument();
      expect(screen.queryByRole("img", { name: "Author company logo" })).not.toBeInTheDocument();
    });

    it("updates logoAlt when prop changes", () => {
      const { rerender } = render(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
          logoAlt="Initial Alt"
        />
      );

      expect(screen.getByAltText("Initial Alt")).toBeInTheDocument();

      rerender(
        <Testimonial
          logo="https://example.com/logo.png"
          quote="Quote"
          author="Author"
          role="Role"
          logoAlt="Updated Alt"
        />
      );

      expect(screen.getByAltText("Updated Alt")).toBeInTheDocument();
      expect(screen.queryByAltText("Initial Alt")).not.toBeInTheDocument();
    });
  });

  describe("Whitespace and Formatting", () => {
    it("preserves whitespace in quote", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="  Quote  with  spaces  "
          author="Author"
          role="Role"
        />
      );
      const quoteElement = container.querySelector(".testimonial-quote");
      expect(quoteElement?.textContent).toBe('“  Quote  with  spaces  ”');
    });

    it("preserves whitespace in author", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="  Author  Name  "
          role="Role"
        />
      );
      const authorElement = container.querySelector(".testimonial-author-name");
      expect(authorElement?.textContent).toBe("  Author  Name  ");
    });

    it("preserves whitespace in role", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Quote"
          author="Author"
          role="  Chief  Executive  Officer  "
        />
      );
      const roleElement = container.querySelector(".testimonial-author-role");
      expect(roleElement?.textContent).toBe("  Chief  Executive  Officer  ");
    });

    it("handles line breaks in quote", () => {
      const { container } = render(
        <Testimonial
          logo={MockLogo}
          quote="Line 1\nLine 2"
          author="Author"
          role="Role"
        />
      );
      const quoteElement = container.querySelector(".testimonial-quote");
      expect(quoteElement?.textContent).toContain("Line 1");
      expect(quoteElement?.textContent).toContain("Line 2");
    });
  });

});