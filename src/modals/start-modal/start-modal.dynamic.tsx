import dynamic from 'next/dynamic';

export const StartModalDynamic = dynamic(() => import('src/modals/start-modal/start-modal').then(( res) => res.StartModal), {
  ssr: false,
});
