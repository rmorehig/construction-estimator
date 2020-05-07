import React from 'react';
import View from 'components/View';
import Tabs from 'components/Tabs';
import { useTabs } from 'hooks/useTabs';
import { useGetCustomerDetails } from 'graphql/queries/entities/getCustomerDetails';
import Spinner from 'components/Spinner';
import Actions from './Actions';
import { GridContainer, GridItem } from 'components/Grid';
import { CardContent, Card, CardHeader } from 'components/Card';
import { DescriptionList, DescriptionRow } from 'components/DescriptionList';
import Contacts from './Contacts';

const tabs = [
  {
    id: 'summary',
    name: 'Detalles'
  },
  {
    id: 'bids',
    name: 'Licitaciones'
  },
  {
    id: 'constructions',
    name: 'Obras'
  }
];

const CustomerDetails = () => {
  const { currentTab, toggleTab } = useTabs('summary');
  const { data, loading, ...pagination } = useGetCustomerDetails();
  if (loading)
    return (
      <div className="flex flex-1 justify-center text-5xl overflow-hidden">
        <Spinner className="text-blue-600 mt-16" />
      </div>
    );
  const {
    name,
    code,
    email,
    phone,
    address,
    postal_code,
    city,
    province,
    country,
    observations,
    website,
    contacts
  } = data?.entity;
  return (
    <View
      title={name}
      parent="/entities"
      actions={<Actions data={data.entity} />}
      badge={{ color: 'teal', value: 'Cliente' }}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <GridContainer>
        <GridItem xs={3}>
          <Card>
            <CardHeader title="Información" />
            <CardContent noPadding>
              <DescriptionList>
                <DescriptionRow term="DNI/CIF" description={code} noBorder />
                <DescriptionRow term="Email" description={email} />
                <DescriptionRow term="Teléfono" description={phone} />
                <DescriptionRow
                  term="Dirección"
                  description={`${address || ''} ${postal_code || ''} ${
                    city || ''
                  } ${province || ''} ${country || ''}`}
                />
                <DescriptionRow term="Web" description={website} />
                <DescriptionRow
                  term="Observaciones"
                  description={observations}
                />
              </DescriptionList>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={3}>
          <Contacts contacts={contacts} {...pagination} />
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default CustomerDetails;
