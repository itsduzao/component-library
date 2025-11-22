import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";
import { IconUpload } from "./icons/IconUpload";
import type { ComponentType, SVGProps } from "react";

// Mock custom icon for testing
const MockIcon: ComponentType<SVGProps<SVGSVGElement>> = props => (
  <svg data-testid="mock-icon" {...props}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

describe("Card Component", () => {
  describe("Rendering", () => {
    it("renders Card title correctly", () => {
      render(<Card title="Test Title" content="Test Content" />);
      const titleElement = screen.getByText("Test Title");
      expect(titleElement).toBeInTheDocument();
    });

    it("renders Card content correctly", () => {
      render(<Card title="Test Title" content="Test Content" />);
      const contentElement = screen.getByText("Test Content");
      expect(contentElement).toBeInTheDocument();
    });

    it("renders default icon when no icon prop is provided", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const iconElement = container.querySelector("svg");
      expect(iconElement).toBeInTheDocument();
    });

    it("renders custom icon when provided", () => {
      render(<Card icon={MockIcon} title="Title" content="Content" />);
      const customIcon = screen.getByTestId("mock-icon");
      expect(customIcon).toBeInTheDocument();
    });

    it("renders with long title text", () => {
      const longTitle =
        "This is a very long title that should still render correctly without any issues";
      render(<Card title={longTitle} content="Content" />);
      const titleElement = screen.getByText(longTitle);
      expect(titleElement).toBeInTheDocument();
    });

    it("renders with long content text", () => {
      const longContent =
        "This is a very long content that should still render correctly and wrap if needed without breaking the layout";
      render(<Card title="Title" content={longContent} />);
      const contentElement = screen.getByText(longContent);
      expect(contentElement).toBeInTheDocument();
    });

    it("handles special characters in title", () => {
      render(<Card title="Title & Test <>" content="Content" />);
      const titleElement = screen.getByText("Title & Test <>");
      expect(titleElement).toBeInTheDocument();
    });

    it("handles special characters in content", () => {
      render(<Card title="Title" content={"Content 'special' & \"quotes\""} />);
      const contentElement = screen.getByText(/Content 'special' & "quotes"/);
      expect(contentElement).toBeInTheDocument();
    });

    it("renders with emoji in title", () => {
      render(<Card title="🎉 Success!" content="Content" />);
      const titleElement = screen.getByText("🎉 Success!");
      expect(titleElement).toBeInTheDocument();
    });

    it("renders with emoji in content", () => {
      render(<Card title="Title" content="Great work! 👏" />);
      const contentElement = screen.getByText("Great work! 👏");
      expect(contentElement).toBeInTheDocument();
    });
  });

  describe("CSS Classes", () => {
    it("has base card-container class", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const cardElement = container.querySelector(".card-container");
      expect(cardElement).toBeInTheDocument();
    });

    it("has icon-container class", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const iconContainer = container.querySelector(".icon-container");
      expect(iconContainer).toBeInTheDocument();
    });

    it("has card-text-wrapper class", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const textWrapper = container.querySelector(".card-text-wrapper");
      expect(textWrapper).toBeInTheDocument();
    });

    it("has card-title class", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const titleElement = container.querySelector(".card-title");
      expect(titleElement).toBeInTheDocument();
    });

    it("has card-content class", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const contentElement = container.querySelector(".card-content");
      expect(contentElement).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("renders as article element", () => {
      render(<Card title="Title" content="Content" />);
      const articleElement = screen.getByRole("article");
      expect(articleElement).toBeInTheDocument();
    });

    it("has aria-labelledby pointing to title", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const cardElement = container.querySelector(
        '[aria-labelledby="card-title"]'
      );
      expect(cardElement).toBeInTheDocument();
    });

    it("has aria-describedby pointing to content", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const cardElement = container.querySelector(
        '[aria-describedby="card-content"]'
      );
      expect(cardElement).toBeInTheDocument();
    });

    it("title has correct id for aria-labelledby", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const titleElement = container.querySelector("#card-title");
      expect(titleElement).toBeInTheDocument();
      expect(titleElement?.textContent).toBe("Title");
    });

    it("content has correct id for aria-describedby", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const contentElement = container.querySelector("#card-content");
      expect(contentElement).toBeInTheDocument();
      expect(contentElement?.textContent).toBe("Content");
    });

    it('icon container has role="img"', () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const iconContainer = container.querySelector('[role="img"]');
      expect(iconContainer).toBeInTheDocument();
    });

    it("icon container has aria-label", () => {
      render(<Card title="Title" content="Content" />);
      const iconContainer = screen.getByLabelText("Card icon");
      expect(iconContainer).toBeInTheDocument();
    });

    it('SVG icon has aria-hidden="true"', () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const svgElement = container.querySelector('svg[aria-hidden="true"]');
      expect(svgElement).toBeInTheDocument();
    });

    it("title is rendered as h3 heading", () => {
      render(<Card title="Test Heading" content="Content" />);
      const headingElement = screen.getByRole("heading", {
        level: 3,
        name: "Test Heading",
      });
      expect(headingElement).toBeInTheDocument();
    });

    it("content is rendered as paragraph", () => {
      const { container } = render(
        <Card title="Title" content="Test paragraph content" />
      );
      const paragraphElement = container.querySelector("p.card-content");
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement?.textContent).toBe("Test paragraph content");
    });
  });

  describe("DOM Structure", () => {
    it("has correct structure with all elements", () => {
      const { container } = render(<Card title="Title" content="Content" />);

      const articleElement = container.querySelector("article.card-container");
      expect(articleElement).toBeInTheDocument();

      const iconContainer = articleElement?.querySelector(".icon-container");
      expect(iconContainer).toBeInTheDocument();

      const svgElement = iconContainer?.querySelector("svg");
      expect(svgElement).toBeInTheDocument();

      const textWrapper = articleElement?.querySelector(".card-text-wrapper");
      expect(textWrapper).toBeInTheDocument();

      const titleElement = textWrapper?.querySelector("h3.card-title");
      expect(titleElement).toBeInTheDocument();

      const contentElement = textWrapper?.querySelector("p.card-content");
      expect(contentElement).toBeInTheDocument();
    });

    it("icon container is positioned before text wrapper", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const cardElement = container.querySelector(".card-container");
      const children = cardElement?.children;

      expect(children?.[0]).toHaveClass("icon-container");
      expect(children?.[1]).toHaveClass("card-text-wrapper");
    });

    it("title comes before content in text wrapper", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const textWrapper = container.querySelector(".card-text-wrapper");
      const children = textWrapper?.children;

      expect(children?.[0]).toHaveClass("card-title");
      expect(children?.[1]).toHaveClass("card-content");
    });
  });

  describe("Props Variations", () => {
    it("works with different title lengths", () => {
      const titles = [
        "Short",
        "Medium Length Title",
        "This is a very long title that might wrap to multiple lines",
      ];

      titles.forEach(title => {
        const { unmount } = render(<Card title={title} content="Content" />);
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
        unmount();
      });
    });

    it("works with different content lengths", () => {
      const contents = [
        "Short content",
        "This is a medium length content that provides more information",
        "This is a very long content that should wrap properly and maintain good readability even with substantial amounts of information provided to the user",
      ];

      contents.forEach(content => {
        const { unmount } = render(<Card title="Title" content={content} />);
        const contentElement = screen.getByText(content);
        expect(contentElement).toBeInTheDocument();
        unmount();
      });
    });

    it("handles numbers in title", () => {
      render(<Card title="Step 1 of 3" content="Content" />);
      const titleElement = screen.getByText("Step 1 of 3");
      expect(titleElement).toBeInTheDocument();
    });

    it("handles numbers in content", () => {
      render(<Card title="Title" content="You have 42 notifications" />);
      const contentElement = screen.getByText("You have 42 notifications");
      expect(contentElement).toBeInTheDocument();
    });
  });

  describe("Icon Behavior", () => {
    it("default icon is IconUpload", () => {
      const { container } = render(<Card title="Title" content="Content" />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toBeInTheDocument();
      // IconUpload has specific path with stroke attribute
      const pathElement = svgElement?.querySelector('path[stroke="white"]');
      expect(pathElement).toBeInTheDocument();
    });

    it("custom icon replaces default icon", () => {
      const { container } = render(
        <Card icon={MockIcon} title="Title" content="Content" />
      );
      const mockIcon = screen.getByTestId("mock-icon");
      expect(mockIcon).toBeInTheDocument();

      // Default IconUpload should not be present
      const defaultIconPath = container.querySelector('path[stroke="white"]');
      expect(defaultIconPath).not.toBeInTheDocument();
    });

    it("icon receives aria-hidden prop", () => {
      render(<Card icon={MockIcon} title="Title" content="Content" />);
      const mockIcon = screen.getByTestId("mock-icon");
      expect(mockIcon).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Visual Consistency", () => {
    it("maintains structure after re-render with same props", () => {
      const { container, rerender } = render(
        <Card title="Original" content="Original Content" />
      );

      const structureBefore = container.innerHTML;

      rerender(<Card title="Original" content="Original Content" />);

      const structureAfter = container.innerHTML;
      expect(structureAfter).toBe(structureBefore);
    });

    it("updates title when prop changes", () => {
      const { rerender } = render(
        <Card title="Initial Title" content="Content" />
      );

      expect(screen.getByText("Initial Title")).toBeInTheDocument();

      rerender(<Card title="Updated Title" content="Content" />);

      expect(screen.getByText("Updated Title")).toBeInTheDocument();
      expect(screen.queryByText("Initial Title")).not.toBeInTheDocument();
    });

    it("updates content when prop changes", () => {
      const { rerender } = render(
        <Card title="Title" content="Initial Content" />
      );

      expect(screen.getByText("Initial Content")).toBeInTheDocument();

      rerender(<Card title="Title" content="Updated Content" />);

      expect(screen.getByText("Updated Content")).toBeInTheDocument();
      expect(screen.queryByText("Initial Content")).not.toBeInTheDocument();
    });

    it("updates icon when prop changes", () => {
      const { rerender, container } = render(
        <Card title="Title" content="Content" />
      );

      const defaultIcon = container.querySelector('path[stroke="white"]');
      expect(defaultIcon).toBeInTheDocument();

      rerender(<Card icon={MockIcon} title="Title" content="Content" />);

      const customIcon = screen.getByTestId("mock-icon");
      expect(customIcon).toBeInTheDocument();
    });
  });

  describe("Whitespace and Formatting", () => {
    it("preserves whitespace in title", () => {
      const { container } = render(
        <Card title="  Title  with  spaces  " content="Content" />
      );
      const titleElement = container.querySelector(".card-title");
      expect(titleElement?.textContent).toBe("  Title  with  spaces  ");
    });

    it("preserves whitespace in content", () => {
      const { container } = render(
        <Card title="Title" content="  Content  with  spaces  " />
      );
      const contentElement = container.querySelector(".card-content");
      expect(contentElement?.textContent).toBe("  Content  with  spaces  ");
    });

    it("handles line breaks in title", () => {
      const { container } = render(
        <Card title="Line 1\nLine 2" content="Content" />
      );
      const titleElement = container.querySelector(".card-title");
      expect(titleElement?.textContent).toBe("Line 1\\nLine 2");
    });

    it("handles line breaks in content", () => {
      const { container } = render(
        <Card title="Title" content="Paragraph 1\nParagraph 2" />
      );
      const contentElement = container.querySelector(".card-content");
      expect(contentElement?.textContent).toBe("Paragraph 1\\nParagraph 2");
    });
  });
});

