import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: string;
}

export const Icon = ({ iconName, ...props }: IconProps) => (
  <svg {...props}>
    <use href={`/image/icons/icons-sprite.svg#${iconName}`} />
  </svg>
);
