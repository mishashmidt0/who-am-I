import cc from 'classcat';
interface ButtonProps {
    title:string;
    className?:string;
}

export const Button = ({title,className}:ButtonProps)=><button className={cc(
  ['h-14 w-60 rounded border border-emerald-900 text-2xl font-medium transition-all hover:bg-violet-700 hover:text-white',className])}>
  {title}
</button>;

