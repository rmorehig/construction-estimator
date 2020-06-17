import React from 'react';
import View from 'components/View';
import Tabs from 'components/Tabs';
import Spinner from 'components/Spinner';
import Actions from './Actions';
import { GridContainer, GridItem } from 'components/Grid';
import { CardContent, Card, CardHeader } from 'components/Card';
import { DescriptionList, DescriptionRow } from 'components/DescriptionList';
import Contacts from './Contacts';
import { useTabs } from 'hooks/useTabs';
import { useGetCustomerDetails } from 'graphql/queries/entities/getCustomerDetails';

const tabs = [
  {
    id: 'summary',
    name: 'Details'
  },
  {
    id: 'bids',
    name: 'Offers'
  },
  {
    id: 'constructions',
    name: 'Constructions'
  }
];

const CustomerDetails = () => {
  const { currentTab, toggleTab } = useTabs('summary');
  const { data, loading } = useGetCustomerDetails();
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
    website
  } = data?.entity;
  return (
    <View
      title={name}
      parent="/entities"
      actions={<Actions data={data.entity} />}
      badge={{ color: 'teal', value: 'Customer' }}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <GridContainer>
        <GridItem xs={3}>
          <Card>
            <CardHeader title="Summary" />
            <CardContent noPadding>
              <DescriptionList>
                <DescriptionRow term="Code" description={code} noBorder />
                <DescriptionRow term="Email" description={email} />
                <DescriptionRow term="Phone" description={phone} />
                <DescriptionRow
                  term="Address"
                  description={`${address || ''} ${postal_code || ''} ${
                    city || ''
                  } ${province || ''} ${country || ''}`}
                />
                <DescriptionRow term="Website" description={website} />
                <DescriptionRow
                  term="Observations"
                  description={observations}
                />
              </DescriptionList>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={3}>
          <Contacts />
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default CustomerDetails;
