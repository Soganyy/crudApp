import React from 'react';
import "../Dashboard/table.css";
const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>İD</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Mail</th>
            <th>Maaş</th>
            <th>Doğum tarixi</th>
            <th colSpan={2} className="text-center">
              Fəaliyyətlər
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button success"
                  >
                    Yenilə
                  </button>
                </td>
                <td className="text-left">
                  <button 
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button danger"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{textAlign:'center'}} colSpan={7}>İşçi yoxdur!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
