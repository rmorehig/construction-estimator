import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  RiUserAddLine as NewProviderIcon,
  RiMoreLine as MoreIcon
} from 'react-icons/ri';
import {
  DetailsContent,
  DetailsTitle,
  Header,
  Name,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Tag
} from './styles';
import { useGetProviders } from 'graphql/queries/providers/getProviders';
import { getInitials } from 'utils/helpers';
import Button from 'components/Button';

export const Page = styled.button`
  border-radius: 8px;
  border-width: 0;
  text-transform: uppercase;
  width: 36px;
  height: 36px;
  background: ${(props) =>
    props.selected ? props.theme.colors.blue.main : 'transparent'};
  color: ${(props) => (props.selected ? '#ffffff' : '#1C1D21')};
  :hover {
    background: ${(props) => props.theme.colors.blue.main};
    color: #ffffff;
  }
`;

const Pages = styled.div`
  button {
    margin-right: 20px;
  }
`;
const TablePagination = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px 20px 20px;
`;

const SortIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.09375 0.5L1.98438 0.828125L1.01562 3.5H1V3.53125L0.5 4.90625V5.5H1.5V5.07812L1.70312 4.5H3.29688L3.5 5.07812V5.5H4.5V4.90625L4 3.53125V3.5H3.98438L3.01562 0.828125L2.90625 0.5H2.09375ZM9 0.5V9.84375L7.70312 8.54688L7 9.25L9.14062 11.4062L9.5 11.75L9.85938 11.4062L12 9.25L11.2969 8.54688L10 9.84375V0.5H9ZM2.5 2.32812L2.92188 3.5H2.07812L2.5 2.32812ZM0.5 6.5V7.5H3.28125L0.640625 10.1406L0.5 10.2969V11.5H4.5V10.5H1.71875L4.35938 7.85938L4.5 7.70312V6.5H0.5Z"
      fill="#8181A5"
    />
  </svg>
);

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  width: 48px;
  height: 48px;
  background: ${(props) => props.theme.colors.blue.light};
  border-radius: 6px;
`;
const ProvidersList = () => {
  const {
    providers,
    loading,
    count,
    nextPage,
    previousPage,
    filters,
    updateFilters,
    hasPrevious,
    hasNext
  } = useGetProviders();

  return (
    <>
      <DetailsTitle>Proveedores</DetailsTitle>
      <DetailsContent>
        <Header>
          <div>
            <Button>Nuevo</Button>
          </div>
          <div>
            <Button color="gray">
              <MoreIcon size={14} />
            </Button>
          </div>
        </Header>
        <Table>
          <TableHeader>
            <div>
              <span>Nombre</span>
              <SortIcon />
            </div>
            <div>
              <span>Email</span>
              <SortIcon />
            </div>
            <div>
              <span>Teléfono</span>
              <SortIcon />
            </div>
            <div>
              <span>Población</span>
              <SortIcon />
            </div>
          </TableHeader>
          <TableBody>
            {providers.map(({ id, entity: { name, email, phone, city } }) => (
              <TableRow key={id}>
                <Name>
                  <div>
                    <Avatar>{getInitials(name)}</Avatar>
                    <div>
                      <span>{name}</span>
                    </div>
                  </div>
                </Name>
                <TableCell>
                  <span>{email}</span>
                </TableCell>
                <TableCell>
                  <span>{phone}</span>
                </TableCell>
                <TableCell>
                  <span>{city}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination>
          <Button color="gray">
            <FaChevronLeft />
          </Button>
          <Button color="gray">
            <FaChevronRight />
          </Button>
        </TablePagination>
      </DetailsContent>
    </>
  );
};

export default ProvidersList;
