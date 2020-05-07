import React from 'react';
import View from 'components/View';
import Tabs from 'components/Tabs';
import Spinner from 'components/Spinner';
import { CardContent, Card, CardHeader } from 'components/Card';
import { DescriptionList, DescriptionRow } from 'components/DescriptionList';
import { GridItem, GridContainer } from 'components/Grid';
import Actions from './Actions';
import Contacts from './Contacts';
import { useTabs } from 'hooks/useTabs';
import { useGetProviderDetails } from 'graphql/queries/entities/getProviderDetails';

const tabs = [
  {
    id: 'summary',
    name: 'Detalles'
  },
  {
    id: 'materials',
    name: 'Materiales'
  },
  {
    id: 'services',
    name: 'Servicios'
  },
  {
    id: 'workers',
    name: 'Trabajadores'
  }
];

const ProviderDetails = () => {
  const { currentTab, toggleTab } = useTabs('summary');
  const { data, loading } = useGetProviderDetails();
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
    website,
    address,
    postal_code,
    city,
    province,
    country,
    observations
  } = data.entity;
  return (
    <View
      title={name}
      parent="/entities"
      actions={<Actions data={data.entity} />}
      badge={{ color: 'blue', value: 'Proveedor' }}
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
          <Contacts />
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default ProviderDetails;
