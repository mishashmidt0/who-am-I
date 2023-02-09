import cc from 'classcat';

interface ButtonProps {
  title: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
}

export const Button = ({ title, className, onClick }: ButtonProps) =>
  <button onClick={onClick} className={cc(
    ['rounded-full hover:shadow-xl active:bg-greenLight font-medium text-white py-4 px-7', className]
  )}>
    {title}
  </button>;

