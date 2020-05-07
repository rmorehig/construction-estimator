import React from 'react';
import { useModal } from 'context/modals';
import ProviderModal from 'views/ProviderModal';
import IconButton from 'components/IconButton';

const Actions = () => {
  const { openModal } = useModal();
  return (
    <div className="flex items-center">
      <div className="w-full"></div>
      <IconButton
        variant="none"
        icon="plus"
        onClick={() => openModal(<ProviderModal />)}
      />
    </div>
  );
};

export default Actions;
