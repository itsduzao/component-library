import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./Testimonial";
import type { ComponentType, SVGProps } from "react";

// Mock company logo (SVG component)
const MockCompanyLogo: ComponentType<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="48" height="48" rx="8" fill="#3B82F6" />
    <path d="M24 14L16 20V32H20V26H28V32H32V20L24 14Z" fill="white" />
  </svg>
);

// Alternative logo
const AlternativeLogo: ComponentType<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="24" cy="24" r="24" fill="#10B981" />
    <path
      d="M34 18L22 30L14 22"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: false,
      description: "Company logo (string URL or SVG component)",
      table: {
        type: { summary: "string | ComponentType<SVGProps<SVGSVGElement>>" },
      },
    },
    quote: {
      control: "text",
      description: "Testimonial quote (required)",
      table: {
        type: { summary: "string" },
      },
    },
    author: {
      control: "text",
      description: "Author name (required)",
      table: {
        type: { summary: "string" },
      },
    },
    role: {
      control: "text",
      description: "Author role/title (required)",
      table: {
        type: { summary: "string" },
      },
    },
    logoAlt: {
      control: "text",
      description: "Alternative text for logo (optional)",
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
    logo: MockCompanyLogo,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    author: "Judith Black",
    role: "CEO of Workcation",
  },
};

export const WithImageLogo: Story = {
  args: {
    logo: "https://via.placeholder.com/48",
    quote:
      "This product has completely transformed how we work. The interface is intuitive and the results are outstanding.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    logoAlt: "TechCorp logo",
  },
};

export const ShortQuote: Story = {
  args: {
    logo: AlternativeLogo,
    quote: "Best decision we ever made!",
    author: "Mike Chen",
    role: "CTO",
  },
};

export const LongQuote: Story = {
  args: {
    logo: MockCompanyLogo,
    quote:
      "We've been using this solution for over two years now, and it has consistently exceeded our expectations. The team is responsive, the product is reliable, and the impact on our business has been tremendous. I cannot recommend it highly enough to anyone looking for a comprehensive solution that truly delivers on its promises.",
    author: "Elizabeth Martinez",
    role: "Director of Operations at Global Enterprises",
  },
};

export const WithEmoji: Story = {
  args: {
    logo: AlternativeLogo,
    quote: "🚀 Absolutely game-changing! Our productivity increased by 300%.",
    author: "David Kim",
    role: "Founder & CEO",
  },
};

export const DifferentRoles: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
      }}
    >
      <Testimonial
        logo={MockCompanyLogo}
        quote="The level of customization available is incredible. We were able to tailor everything to our specific needs."
        author="James Wilson"
        role="Software Engineer"
      />
      <Testimonial
        logo={AlternativeLogo}
        quote="Outstanding support team. They went above and beyond to ensure our success."
        author="Maria Garcia"
        role="Customer Success Manager"
      />
      <Testimonial
        logo={MockCompanyLogo}
        quote="ROI was visible within the first month. Highly recommended for growing teams."
        author="Robert Taylor"
        role="VP of Sales"
      />
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        maxWidth: "600px",
      }}
    >
      <Testimonial
        logo={MockCompanyLogo}
        quote="This platform has revolutionized how we handle our daily operations. The automation features alone have saved us countless hours."
        author="Alexandra Thompson"
        role="Operations Director at InnovateCo"
      />
      <Testimonial
        logo={AlternativeLogo}
        quote="The integration process was seamless, and the results were immediate. Our team adoption rate was 100% within the first week."
        author="Christopher Lee"
        role="IT Manager at StartupHub"
      />
      <Testimonial
        logo={MockCompanyLogo}
        quote="We evaluated several solutions before choosing this one. The decision has paid off tremendously in terms of both efficiency and team satisfaction."
        author="Jennifer Anderson"
        role="Chief Product Officer at TechVision"
      />
    </div>
  ),
};

export const CompanyShowcase: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "24px",
        maxWidth: "1400px",
        padding: "24px",
      }}
    >
      <Testimonial
        logo="https://via.placeholder.com/48/3B82F6/FFFFFF?text=A"
        quote="Exceptional quality and reliability. Our clients have noticed the difference."
        author="Daniel Brown"
        role="Account Executive"
        logoAlt="Company A logo"
      />
      <Testimonial
        logo="https://via.placeholder.com/48/10B981/FFFFFF?text=B"
        quote="The analytics dashboard provides insights we never had before."
        author="Sophie Martin"
        role="Data Analyst"
        logoAlt="Company B logo"
      />
      <Testimonial
        logo="https://via.placeholder.com/48/8B5CF6/FFFFFF?text=C"
        quote="Training our team was effortless. The interface is incredibly user-friendly."
        author="Thomas Anderson"
        role="Training Coordinator"
        logoAlt="Company C logo"
      />
      <Testimonial
        logo="https://via.placeholder.com/48/F59E0B/FFFFFF?text=D"
        quote="We saw a 250% increase in efficiency within the first quarter."
        author="Laura Davis"
        role="Business Analyst"
        logoAlt="Company D logo"
      />
    </div>
  ),
};

export const MinimalQuote: Story = {
  args: {
    logo: AlternativeLogo,
    quote: "Simply outstanding.",
    author: "Alex Rivera",
    role: "Designer",
  },
};

export const WithSpecialCharacters: Story = {
  args: {
    logo: MockCompanyLogo,
    quote:
      "We've achieved 99.9% uptime & our customer satisfaction scores have never been higher! It's a win-win situation.",
    author: "Patricia O'Connor",
    role: "VP of Engineering",
  },
};

