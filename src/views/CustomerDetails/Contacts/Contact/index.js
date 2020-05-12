import React from 'react';
import Badge from 'components/Badge';
import IconLink from 'components/IconLink';
import { Menu, MenuItem } from 'components/Menu';
import { useModal } from 'context/modals';
import ContactModal from 'views/ContactModal';
import { useDeleteContact } from 'graphql/mutations/entities/deleteContact';

const Contact = (props) => {
  const {
    id,
    entity_id,
    name,
    email,
    phone,
    position,
    default_contact
  } = props;
  const { openModal } = useModal();
  const { deleteContact } = useDeleteContact();
  return (
    <div className="flex px-4 py-5 sm:px-6 items-center justify-between focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <div className="flex-1 flex flex-col flex-shrink">
        <div className="text-sm leading-5 font-medium text-gray-700 truncate">
          {name}
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <div className="mr-3 text-gray-400">
              <IconLink type="email" value={email} />
            </div>
            <div className="mt-2 flex items-center text-gray-400 sm:mt-0">
              <IconLink type="phone" value={phone} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-shrink-0 flex items-center justify-end">
        {default_contact && (
          <Badge green className="mr-2">
            Principal
          </Badge>
        )}
        {position && <Badge gray>{position}</Badge>}
        <Menu>
          <MenuItem
            onClick={() =>
              openModal(<ContactModal />, { ...props, isNew: false })
            }
          >
            Editar
          </MenuItem>
          <MenuItem onClick={() => deleteContact({ id, entity_id })}>
            Eliminar
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Contact;
