import { useModals } from 'hooks/use-modals';
import { useForm } from 'react-hook-form';

interface AuthForm {
  email: string;
  password: string;
}

export const useStartModal = () => {
  const formMethods = useForm<AuthForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  });

  const { showModal } = useModals();

  const onSubmit = (data: AuthForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return {
    formMethods,
    onSubmit,
    showModal,
  };
};
