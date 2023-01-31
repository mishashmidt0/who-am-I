import { useStore } from "effector-react";
import { useEffect } from 'react';
import { $modal, ModalNames } from "src/store/modal";




interface UseModalLayoutProps {
  name: ModalNames;
}

export const useModalLayout = ({ name }: UseModalLayoutProps) => {
  const visible = useStore($modal);

  const isVisible = name === visible;

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', isVisible);
  }, [isVisible]);

  return { isVisible };
};
