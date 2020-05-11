import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card';
import { List, ListItem } from 'components/List';
import Contact from './Contact';
import Pagination from 'components/Pagination';
import Actions from './Actions';
import { useGetContactsByEntity } from 'graphql/queries/entities/getContactsByEntity';
import useFilters from 'hooks/useFilters';

const Contacts = () => {
  const { limit, offset, orderBy, setCount, ...pagination } = useFilters({
    limit: 5,
    filters: ['name'],
    search: '',
    orderBy: { default_contact: 'desc' }
  });
  const { data, loading } = useGetContactsByEntity({
    limit,
    offset,
    orderBy,
    setCount
  });
  return (
    <Card>
      <CardHeader title="Contactos" action={<Actions />} />
      <CardContent noPadding>
        <List loading={loading}>
          {data?.contacts.map(({ id, ...contactInfo }, index) => (
            <ListItem key={id} noBorder={index === 4}>
              <Contact {...contactInfo} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardFooter>
        <Pagination {...pagination} />
      </CardFooter>
    </Card>
  );
};

export default Contacts;
