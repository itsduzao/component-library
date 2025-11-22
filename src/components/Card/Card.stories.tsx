import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import type { ComponentType, SVGProps } from "react";

// Mock custom icon for stories
const MockCustomIcon: ComponentType<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Card title (required)",
      table: {
        type: { summary: "string" },
      },
    },
    content: {
      control: "text",
      description: "Card content (required)",
      table: {
        type: { summary: "string" },
      },
    },
    icon: {
      control: false,
      description: "Custom icon component (optional)",
      table: {
        type: { summary: "ComponentType<SVGProps<SVGSVGElement>>" },
        defaultValue: { summary: "IconUpload" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Easy Deployment",
    content:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Start",
    content: "Get started in minutes.",
  },
};

export const LongContent: Story = {
  args: {
    title: "Comprehensive Solution",
    content:
      "This is a much longer content message that demonstrates how the card handles extended text. It should wrap properly and maintain good readability even with substantial amounts of information provided to the user.",
  },
};

export const CustomIcon: Story = {
  args: {
    title: "Custom Icon",
    content: "This card uses a custom icon instead of the default upload icon.",
    icon: MockCustomIcon,
  },
};

export const ShortTitle: Story = {
  args: {
    title: "Done!",
    content: "Your task has been completed successfully.",
  },
};

export const LongTitle: Story = {
  args: {
    title: "This is a Very Long Title That Might Wrap to Multiple Lines",
    content: "Content text for the card.",
  },
};

export const WithEmoji: Story = {
  args: {
    title: "🎉 Success!",
    content: "Great work! Your deployment was successful. 👏",
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Card
        title="Fast Performance"
        content="Lightning-fast load times and optimal performance."
      />
      <Card
        title="Secure by Default"
        content="Built-in security features to protect your data."
      />
      <Card
        title="Easy Integration"
        content="Simple API and comprehensive documentation."
      />
    </div>
  ),
};

export const DifferentContentLengths: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
      }}
    >
      <Card title="Short" content="Brief content." />
      <Card
        title="Medium"
        content="This card has a moderate amount of content to display."
      />
      <Card
        title="Long"
        content="This card contains a substantial amount of text that demonstrates how the component handles longer content. The text should wrap naturally and maintain good readability throughout."
      />
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Card title="Default Icon" content="Using the default upload icon." />
      <Card
        icon={MockCustomIcon}
        title="Custom Icon"
        content="Using a custom layers icon."
      />
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
      }}
    >
      <Card
        title="Deploy to Production"
        content="Push your changes to production with a single click. Automatic rollback on failure."
      />
      <Card
        title="Real-time Analytics"
        content="Monitor your application's performance with real-time metrics and insights."
      />
      <Card
        title="Team Collaboration"
        content="Work together with your team using built-in collaboration tools and shared workspaces."
      />
      <Card
        title="24/7 Support"
        content="Get help whenever you need it with our dedicated support team available around the clock."
      />
    </div>
  ),
};

