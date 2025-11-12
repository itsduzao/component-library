export type BadgeFormat = 'square' | 'pill';

export type BadgeColor =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export interface BadgeProps {
  children: React.ReactNode;
  format?: BadgeFormat;
  color?: BadgeColor;
}