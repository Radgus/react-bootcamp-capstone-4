import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DividerSpace } from '../../components/Mix';
import ProductContext from '../../state/productContext';
import FormSection from './components/FormSection';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 0 3% 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
`;

const Main = ({children, ...props}) => <Container {...props}>{children}</Container>;

const SummaryContainer = styled.div`
  margin: 2rem 1rem;
  padding: 0 1rem;
  border: 0.1rem solid gray;
  border-radius: 1rem;
  background-color: rgb(232, 240, 254);
`;

const Summary = ({children, ...props}) => 
<SummaryContainer {...props}>{children}</SummaryContainer>;

const SummaryButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const SummaryButtons = ({children, ...props}) => 
<SummaryButtonsContainer {...props}>{children}</SummaryButtonsContainer>;

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

const Table = ({children, ...props}) => <TableContainer {...props}>{children}</TableContainer>;

Main.FormSection = FormSection;


const Checkout = () => {
  const {productsInCart} = useContext(ProductContext);

  return(
    <Main>
      <h2 style={{'textAlign':'center'}}>Customer information</h2>
      <DividerSpace margin='1rem 0'/>
      <Main.FormSection />
      
      <Summary>
        <h2 style={{'textAlign':'center'}}>Order summary</h2>
        <div>
          <Table>
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
          </Table>

        </div>
        <SummaryButtons>
          <button type='submit' form='myform'>Place order</button>
          <Link to='/cart'>
            <button>Go back to cart</button>
          </Link>
        </SummaryButtons>
      </Summary>
   
    </Main>
  );
};

export default Checkout;
