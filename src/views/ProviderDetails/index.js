import React from 'react';
import View from 'components/View';
import Tabs from 'components/Tabs';
import { CardContent, Card, CardHeader } from 'components/Card';
import { DescriptionList, DescriptionRow } from 'components/DescriptionList';
import { GridItem, GridContainer } from 'components/Grid';
import Actions from './Actions';
import Contacts from './Contacts';
import { useTabs } from 'hooks/useTabs';
import { useGetProviderDetails } from 'graphql/queries/entities/getProviderDetails';
import IconLink from 'components/IconLink';

const tabs = [
  {
    id: 'summary',
    name: 'Detalles'
  },
  {
    id: 'resources',
    name: 'Recursos'
  }
];

const ProviderDetails = () => {
  const { currentTab, toggleTab } = useTabs('summary');
  const { data, loading } = useGetProviderDetails();

  const {
    name,
    code,
    email,
    phone,
    website,
    address,
    postal_code,
    city,
    province,
    country,
    observations
  } = data?.entity || {};
  return (
    <View
      title={name}
      parent="/entities"
      actions={<Actions data={data?.entity} />}
      badge={{ color: 'blue', value: 'Proveedor' }}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <GridContainer>
        <GridItem xs={3}>
          <Card>
            <CardHeader title="Información" />
            <CardContent noPadding loading={loading}>
              <DescriptionList>
                <DescriptionRow term="DNI/CIF" description={code} noBorder />
                <DescriptionRow
                  term="Email"
                  description={
                    <IconLink type="email" value={email} showAlways />
                  }
                />
                <DescriptionRow
                  term="Teléfono"
                  description={
                    <IconLink type="phone" value={phone} showAlways />
                  }
                />
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
          <Contacts />
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default ProviderDetails;
