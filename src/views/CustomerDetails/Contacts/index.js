import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card';
import { List, ListItem } from 'components/List';
import Contact from './Contact';
import Pagination from 'components/Pagination';
import Actions from './Actions';
import { useGetContactsByEntity } from 'graphql/queries/entities/getContactsByEntity';
import Badge from 'components/Badge';

const Contacts = () => {
  const { data, loading, ...pagination } = useGetContactsByEntity();
  const renderTitle = () => (
    <div>
      <span className="mr-1">Contacts</span>
      {!loading && <Badge orange>{pagination.count}</Badge>}
    </div>
  );
  return (
    <Card>
      <CardHeader title={renderTitle()} action={<Actions />} />
      <CardContent noPadding loading={loading}>
        <List>
          {data?.contacts.map((contactInfo, index) => (
            <ListItem key={contactInfo.id} noBorder={index === 4}>
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
