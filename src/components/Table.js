/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  SvgIcon,
  Tab,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  makeStyles
} from '@material-ui/core';
import {
  Search as SearchIcon,
  MoreHorizontal as MoreIcon,
  Plus as PlusIcon
} from 'react-feather';

const tabs = [
  {
    value: 'all',
    label: 'Todo'
  },
  {
    value: 'materials',
    label: 'Materiales'
  },
  {
    value: 'services',
    label: 'Servicios'
  },
  {
    value: 'workers',
    label: 'Trabajadores'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  }
}));

const Table = ({ className, count, limit, page, data, ...rest }) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('all');
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const handleQueryChange = (event) => {};

  const handleSortChange = (event) => {};

  const handlePageChange = (event, newPage) => {};

  const handleLimitChange = (event) => {};

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={700}>
          <MaterialTable size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'grey' }}>Nombre</TableCell>
                <TableCell style={{ color: 'grey' }}>Email</TableCell>
                <TableCell style={{ color: 'grey' }}>Teléfono</TableCell>
                <TableCell style={{ color: 'grey' }}>Población</TableCell>
                <TableCell align="right" style={{ color: 'grey' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    <TableCell>
                      <Link
                        color="inherit"
                        component={RouterLink}
                        to="/app/management/customers/1"
                        variant="h6"
                      >
                        {row.entity.name}
                      </Link>
                    </TableCell>
                    <TableCell>{row.entity.email}</TableCell>
                    <TableCell>{row.entity.phone}</TableCell>
                    <TableCell>{row.entity.city}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        component={RouterLink}
                        to="/app/management/customers/1"
                      >
                        <SvgIcon fontSize="small">
                          <MoreIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </MaterialTable>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={count}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        labelRowsPerPage={null}
      />
    </Card>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  page: PropTypes.number,
  data: PropTypes.array
};

Table.defaultProps = {
  count: 0,
  page: 0,
  data: []
};

export default Table;
