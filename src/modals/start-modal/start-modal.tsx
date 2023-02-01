import { ModalLayout } from 'src/layouts/modal-layout/modal-layout';

export const StartModal = () => {
  console.log(2);

  return (
    <ModalLayout name='start'>
      <div className="bg-white">
        <p>Выберите колоду</p>
      </div>
    </ModalLayout>
  );
};
