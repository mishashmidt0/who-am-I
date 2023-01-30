import { ReactNode } from 'react';

import cc from 'classcat';
import { Icon } from 'src/components/icon/icon';
import { useModals } from 'src/hooks/use-modals';
import { useModalLayout } from 'src/loyouts/main-layout/use-modal-layout';
import { ModalNames } from 'src/store/modal';

interface ModalLayoutProps {
  children: ReactNode;
  name: ModalNames;
  modalClassName?: string;
  title?: string;
  wrapperClassName?: string;
}

export const ModalLayout = ({ name, wrapperClassName, modalClassName, children, title }: ModalLayoutProps) => {
  const { isVisible } = useModalLayout({ name });
  const { hideModal } = useModals();

  return (
    <div
      className={cc([
        'fixed top-0 left-0 bottom-0 right-0 z-50 flex flex-col items-center overflow-auto bg-black/90 md:py-10 md:px-4',
        modalClassName,
        {
          hidden: !isVisible,
        },
      ])}
    >
      <button className='fixed inset-0 z-[-1]' onClick={() => hideModal()} />

      <div
        className={cc([
          'shadow-[rgb(0 0 0 / 24%)] relative m-auto flex h-full w-full flex-col justify-between bg-dark p-4 shadow-xl md:h-auto md:justify-start md:rounded-2xl md:p-6',
          wrapperClassName,
        ])}
      >
        <div className='mb-5 flex w-full items-center space-x-3'>
          <div className='flex-1 text-2xl font-bold text-white'>{title}</div>

          <button className='bg-gray relative h-8 w-8 rounded-lg' onClick={() => hideModal()}>
            <Icon className='pos-abs h-3 w-3 fill-white' iconName='close' />
          </button>
        </div>

        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
};
