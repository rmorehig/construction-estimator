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
  } = data.entity;
  return (
    <View title="Cliente" actions={<Actions data={data.entity} />}>
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <GridContainer>
        <GridItem xs={4}>
          <Card>
            <CardHeader title="Información" />
            <CardContent noPadding>
              <DescriptionList>
                <DescriptionRow term="Nombre" description={name} noBorder />
                <DescriptionRow term="DNI/CIF" description={code} />
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
        <GridItem xs={2}>
          <Card>
            <CardHeader title="Contactos" />
            <CardContent>Aquí van contactos</CardContent>
          </Card>
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default CustomerDetails;
