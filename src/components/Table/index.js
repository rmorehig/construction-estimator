import React from 'react';
import { getInitials } from 'utils/helpers';
const columns = [
  { id: 'name', name: 'Nombre' },
  { id: 'email', name: 'Email' },
  { id: 'phone', name: 'Teléfono' },
  { id: 'city', name: 'Población' }
];
const Table = ({ data = [], loading = false }) => {
  return (
    <div style={{ padding: 20 }}>
      <div className="header">
        <h1>Entidades</h1>
        <div className="actions">
          <div>
            <button>Nuevo</button>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(({ id, name }) => (
              <th key={id}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td className="main">
                <div className="avatar">{getInitials(row.entity.name)}</div>
                {row.entity.name}
              </td>
              <td>{row.entity.email}</td>
              <td>{row.entity.phone}</td>
              <td>{row.entity.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
