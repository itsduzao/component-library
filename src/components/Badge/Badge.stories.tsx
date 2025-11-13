import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import {
  BADGE_COLOR_SUMMARY,
  BADGE_COLORS,
  BADGE_FORMAT_SUMMARY,
  BADGE_FORMATS,
} from "./Badge.constants";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    format: {
      control: "radio",
      options: BADGE_FORMATS,
      description: "Badge format",
      table: {
        type: { summary: BADGE_FORMAT_SUMMARY },
        defaultValue: { summary: "'square'" },
      },
    },
    color: {
      control: "select",
      options: BADGE_COLORS,
      description: "Badge color",
      table: {
        type: {
          summary: BADGE_COLOR_SUMMARY,
        },
        defaultValue: { summary: "'gray'" },
      },
    },
    children: {
      control: "text",
      description: "Badge content",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Pill: Story = {
  args: {
    children: "Pill Badge",
    format: "pill",
  },
};

export const Red: Story = {
  args: {
    children: "Red Badge",
    color: "red",
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {BADGE_COLORS.map((color) => (
        <Badge key={color} color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Badge>
      ))}
    </div>
  ),
};

export const AllFormats: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {BADGE_FORMATS.map((format) => (
        <Badge key={format} format={format} color="blue">
          {format.charAt(0).toUpperCase() + format.slice(1)}
        </Badge>
      ))}
    </div>
  ),
};

