import { useEvent } from 'effector-react/scope';
import { $modalApi } from 'src/store/modal';

export const useModals = () => {
  const { showModal, hideModal } = useEvent({
    hideModal: $modalApi.hide,
    showModal: $modalApi.show,
  });

  return {
    hideModal,
    showModal,
  };
};
