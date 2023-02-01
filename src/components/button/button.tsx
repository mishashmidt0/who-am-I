import cc from 'classcat';

interface ButtonProps {
  title: string;
  className?: string;
}

export const Button = ({ title, className }: ButtonProps) =>
  <button className={cc(
    ['rounded-full hover:shadow-xl font-medium', className]
  )}>
    {title}
  </button>;

