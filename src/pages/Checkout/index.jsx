import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DividerSpace } from '../../components/Mix';
import ProductContext from '../../state/productContext';
import { useForm } from "react-hook-form";


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

const FormContainer = styled.form`
  padding: 1rem;
  background-color: #DCDCDC;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  > * {
   margin-top : 1rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;

const Form = ({children, ...props}) => <FormContainer {...props}>{children}</FormContainer>

const Input = styled.input`
  outline: none;
  border: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
`;

const LabelContainer = styled.label`
  font-weight: 600;
  padding: 0 1rem;
  font-family: sans-serif;
`;

const Label = ({children, ...props}) => <LabelContainer {...props}>{children}</LabelContainer>

const RedAlert = styled.p`
  color: darkmagenta;
  margin: 0.4rem 0;
  padding: 0 1rem;
  font-family: cursive;
`;

const ValidateAlert = ({children, ...props}) => <RedAlert {...props}>{children}</RedAlert>

const Summary = styled.div`
  margin: 2rem 1rem;
  padding: 0 1rem;
  border: 0.1rem solid gray;
  border-radius: 1rem;
  background-color: rgb(232, 240, 254);
`;

const SummaryButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const Table = styled.table`
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


Main.Form = Form;
Main.Input = Input;
Main.Label = Label;
Main.ValidateAlert = ValidateAlert;

const Checkout = () => {
  const {productsInCart} = useContext(ProductContext);
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return(
    <Main>
      <h2 style={{'textAlign':'center'}}>Customer information</h2>
      <DividerSpace margin='1rem 0'/>
      <Main.Form id='myform' onSubmit={handleSubmit(onSubmit)}>
        <Main.Label >First Name</Main.Label>
        <Main.Input 
          type="text" 
          placeholder="First name"
          {...register("firstName", {required: true, maxLength: 20})} 
        />
        {errors.firstName?.type === 'required' && 
          <Main.ValidateAlert>First name is required</Main.ValidateAlert>
        }
        <input type="submit" />
      </Main.Form>
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
