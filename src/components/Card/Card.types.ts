import { ComponentType, SVGProps } from "react";

export interface CardProps {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
}