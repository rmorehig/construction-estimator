import React from 'react';
import IconButton from 'components/IconButton';
import { RiAddLine as PlusIcon } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

const Actions = () => {
  const history = useHistory();
  return (
    <div className="flex">
      <IconButton onClick={() => history.push('/entities/new')}>
        <PlusIcon size={20} />
      </IconButton>
    </div>
  );
};

export default Actions;
