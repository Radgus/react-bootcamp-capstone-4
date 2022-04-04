import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DividerSpace } from '../../components/Mix';
import ProductContext from '../../state/productContext';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 0 3% 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  
`;

const Form = styled.form`
  padding: 0 1rem;
  > * {
   margin-top : 1rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;

// Input component INICIO

const Layout = styled.div`
  min-height: 5rem;
  border-radius: 0.5rem;
  box-shadow: -0.3rem 0.3rem 0.5rem rgb(0 0 0 / 0.4);
  background-color: rgb(232, 240, 254);
  label {
    padding: 0 1rem;
    font-weight: 600;
    font-size: small;
  }
  input {
    outline: none;
    border-radius: 0.5rem;
    border: none;
    height: 2.5rem;
    padding: 0 1rem;
    width: 100%;
    margin: 0.5rem 0;
    background-color: rgb(232, 240, 254);
  }
  textarea {
    outline: none;
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    width: 100%;
    margin: 0.5rem 0;
    background-color: rgb(232, 240, 254);
  }
`;

const Summary = styled.div`
  margin: 2rem 1rem;
  padding: 0 1rem;
  border: 0.1rem solid gray;
  border-radius: 1rem;
  background-color: rgb(232, 240, 254);
`;

const Input = ({name, label, value, type, cb, placeholder, maxlength, pattern='*'}) => {

  return(
    <Layout>
      <label htmlFor={name}>{label}</label>
      {
        type === 'textarea' 
        ? <textarea 
            name={name}
            value={value}
            onChange={cb}
            placeholder={placeholder} 
            cols="30" 
            rows="4" 
            maxLength={maxlength}
          />
        : <input 
            type={type}
            name={name}
            value={value}
            onChange={cb}
            placeholder={placeholder}
            maxLength={maxlength}
            pattern={pattern}
          />
      }
      
    </Layout>
  );
};

// Input component FIN

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



const Checkout = () => {
  const initalState = { 
    name: '',
    email: '',
    pc: '',
    textarea: '',
  };
  const [form, setForm] = useState({...initalState});
  const {productsInCart} = useContext(ProductContext);
  
  useEffect(()=>{
    console.log('form: ', form);
  },[form]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const tmp = {...form};
    tmp[name] = value;
    setForm(tmp);
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Enviar data del form',e);
  }

  return(
    <Container>
      <h2 style={{'textAlign':'center'}}>Customer information</h2>
      <DividerSpace margin='1rem 0'/>
      <Form id='myform' onSubmit={handleForm}>
          <Input
            value={form.name}
            cb={handleInput}
            label='Name'
            type='text'
            name='name'
            placeholder='Please write your name ...'
            maxLength="50"
          />
          <Input
            value={form.email}
            cb={handleInput}
            label='Email'
            type='email'
            name='email'
            placeholder='Please write your email ...'
            maxLength="50"
            pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"
          />
          <Input
            value={form.pc}
            cb={handleInput}
            label='Postal Code'
            type='text'
            name='pc'
            placeholder='Please write your postal code ...'
            maxLength="5"
          />
          <Input
            value={form.textarea}
            cb={handleInput}
            label='Order notes'
            type='textarea'
            name='textarea'
            placeholder='Please write your order notes ...'
            maxLength="250"
          />
          
      </Form>
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

    </Container>
  );
};

export default Checkout;
