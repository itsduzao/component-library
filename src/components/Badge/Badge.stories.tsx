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
      <Badge color="gray">Gray</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  ),
};

export const AllFormats: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge format="square" color="blue">
        Square
      </Badge>
      <Badge format="pill" color="blue">
        Pill
      </Badge>
    </div>
  ),
};

