import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card';
import { List, ListItem } from 'components/List';
import Contact from './Contact';
import Pagination from 'components/Pagination';
import Actions from './Actions';
import { useGetContactsByEntity } from 'graphql/queries/entities/getContactsByEntity';

const Contacts = () => {
  const { data, loading, ...pagination } = useGetContactsByEntity();

  return (
    <Card>
      <CardHeader title="Contactos" action={<Actions />} />
      <CardContent noPadding loading={loading}>
        <List>
          {data?.contact.map(({ id, ...contactInfo }, index) => (
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