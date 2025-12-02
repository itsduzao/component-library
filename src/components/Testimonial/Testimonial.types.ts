import { ComponentType, SVGProps } from "react";

export type LogoSource = 
  | string 
  | ComponentType<SVGProps<SVGSVGElement>>;

export interface TestimonialProps {
  logo: LogoSource;
  quote: string;
  author: string;
  role: string;
  logoAlt?: string;
}