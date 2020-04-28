import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FaDolly as MaterialsIcon } from 'react-icons/fa';
import {
  RiTeamLine as AllIcon,
  RiSettings5Line as ServicesIcon,
  RiUser2Line as WorkersIcon
} from 'react-icons/ri';
import company from 'assets/images/company.jpg';
import {
  Avatar,
  IconButton,
  OverviewContent,
  OverviewTitle,
  OverviewWrapper,
  ProviderItem,
  Providers,
  Subtitle,
  Title
} from './styles';

const DownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9L12 16L5 9"
      stroke="#8181A5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overview = () => {
  const { colors } = useTheme();
  return (
    <OverviewWrapper>
      <OverviewTitle>
        <Company>
          <Avatar src={company} />
          <span>Construcciones Hnos. Ortíz</span>
        </Company>
        <IconButton>
          <DownIcon />
        </IconButton>
      </OverviewTitle>
      <OverviewContent>
        <Title>Resumen</Title>
        <Subtitle>Proveedores disponibles</Subtitle>
        <Providers>
          <ProviderItem color="gray">
            <div>
              <span>Total</span>
              <span>652</span>
            </div>
            <div>
              <button>
                <AllIcon size={30} color={colors.gray.dark} />
              </button>
            </div>
          </ProviderItem>
          <ProviderItem color="yellow">
            <div>
              <span>Materiales</span>
              <span>218</span>
            </div>
            <div>
              <button>
                <MaterialsIcon size={30} color={colors.yellow.dark} />
              </button>
            </div>
          </ProviderItem>
          <ProviderItem color="red">
            <div>
              <span>Servicios</span>
              <span>191</span>
            </div>
            <div>
              <button>
                <ServicesIcon size={30} color={colors.red.main} />
              </button>
            </div>
          </ProviderItem>
          <ProviderItem color="blue">
            <div>
              <span>Trabajadores</span>
              <span>76</span>
            </div>
            <div>
              <button>
                <WorkersIcon size={30} color={colors.blue.dark} />
              </button>
            </div>
          </ProviderItem>
        </Providers>
      </OverviewContent>
    </OverviewWrapper>
  );
};

export default Overview;
