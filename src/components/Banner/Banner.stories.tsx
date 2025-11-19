import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import { BANNER_STATUSES, BANNER_STATUSES_SUMMARY } from "./Banner.constants";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: BANNER_STATUSES,
      description: "Banner status type",
      table: {
        type: { summary: BANNER_STATUSES_SUMMARY },
      },
    },
    title: {
      control: "text",
      description: "Banner title (required)",
      table: {
        type: { summary: "string" },
      },
    },
    content: {
      control: "text",
      description: "Banner content (optional)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "info",
    title: "Information",
    content: "This is an informational banner message.",
  },
};

export const Success: Story = {
  args: {
    status: "success",
    title: "Success",
    content: "Your action was completed successfully.",
  },
};

export const Info: Story = {
  args: {
    status: "info",
    title: "Information",
    content: "Here is some helpful information for you.",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    title: "Warning",
    content: "Please be cautious with this action.",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    title: "Error",
    content: "An error occurred. Please try again.",
  },
};

export const WithoutContent: Story = {
  args: {
    status: "info",
    title: "Simple Banner",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
      {BANNER_STATUSES.map((status) => (
        <Banner
          key={status}
          status={status}
          title={status.charAt(0).toUpperCase() + status.slice(1)}
          content={`This is a ${status} banner with descriptive content.`}
        />
      ))}
    </div>
  ),
};

export const AllStatusesWithoutContent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
      {BANNER_STATUSES.map((status) => (
        <Banner
          key={status}
          status={status}
          title={status.charAt(0).toUpperCase() + status.slice(1)}
        />
      ))}
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    status: "warning",
    title: "Important Notice",
    content: "This is a much longer content message that demonstrates how the banner handles extended text. It should wrap properly and maintain good readability even with substantial amounts of information.",
  },
};

export const ShortTitle: Story = {
  args: {
    status: "success",
    title: "Done!",
  },
};
