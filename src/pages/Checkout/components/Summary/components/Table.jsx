import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../../../../state/productContext';

const TableContainer = styled.table`
  width: 100%;
  font-size: 1.3rem;
  margin-top: 1rem;
  th,td {
    width: 33%;
    text-align: center;
  }
  td {
    padding: 0.3rem 0;
  }
`;

const Table = ({...props}) => {
  const {productsInCart} = useContext(ProductContext);

  return (
    <TableContainer {...props}>
      <thead>
        <tr>
          <th>Name</th>
          <th>No. products</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {
          productsInCart.length > 0 &&
          productsInCart.map(item=>{
            return(
              <tr key={item.product.id}>
                <td>{item.product.data.name}</td>
                <td>{item.amount}</td>
                <td>${item.product.data.price}</td>
              </tr>
            );
          })
        }
      </tbody>
      <tfoot>
        <tr>
          <td> </td>
          <td><span>Total:</span></td>
          <td>${productsInCart.reduce((valorAnterior,valorActual)=>{
            return valorAnterior+(valorActual.amount * valorActual.product.data.price);
          },0)}</td>
        </tr>
      </tfoot>
    </TableContainer>
  );
};

export default Table;
    