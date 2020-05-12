import React from 'react';
import { useModal } from 'context/modals';
import IconButton from 'components/IconButton';
import ContactModal from 'views/ContactModal';
import { useParams } from 'react-router-dom';

const Actions = () => {
  const { openModal } = useModal();
  const { id } = useParams();
  return (
    <div className="flex items-center">
      <div className="w-full"></div>
      <IconButton
        variant="none"
        icon="plus"
        onClick={() =>
          openModal(<ContactModal />, { entity_id: id, isNew: true })
        }
      />
    </div>
  );
};

export default Actions;
