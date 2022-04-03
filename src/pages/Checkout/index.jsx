import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DividerSpace } from '../../components/Mix';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 0 3% 2rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  
`;

const Form = styled.div`
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
  height: 5rem;
  border-radius: 0.5rem;
  /* box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc; */
  /* border: 0.1rem solid gray; */
  label {
    padding: 0 1rem;
    color: blue;
    font-weight: 600;
    font-size: small;
    height: 2rem;
  }
  input {
    box-shadow: -0.3rem 0.3rem 0.5rem rgb(0 0 0 / 0.4);
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
    box-shadow: -0.3rem 0.3rem 1rem rgb(0 0 0 / 0.4);
    outline: none;
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    width: 100%;
    margin: 0.5rem 0;
    background-color: rgb(232, 240, 254);
  }
  
`;

const Input = ({value, cb, label, type, name, placeholder}) => {

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
          />
        : <input 
            type={type}
            name={name}
            value={value}
            onChange={cb}
            placeholder={placeholder}
          />
      }
      
    </Layout>
  );
};

// Input component FIN


const Checkout = () => {
  const initalState = { 
    name: '',
    email: '',
    pc: '',
    textarea: '',
  };
  const [form, setForm] = useState({...initalState});
  
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
  return(
    <Container>
      <h2 style={{'textAlign':'center'}}>Customer information</h2>
      <DividerSpace margin='1rem 0'/>
      <Form action="">
          <Input
            value={form.name}
            cb={handleInput}
            label='Name'
            type='text'
            name='name'
            placeholder='Please write your name ...'
          />
          <Input
            value={form.email}
            cb={handleInput}
            label='Email'
            type='email'
            name='email'
            placeholder='Please write your email ...'
          />
          <Input
            value={form.pc}
            cb={handleInput}
            label='Postal Code'
            type='text'
            name='pc'
            placeholder='Please write your postal code ...'
          />
          <Input
            value={form.textarea}
            cb={handleInput}
            label='Order notes'
            type='textarea'
            name='textarea'
            placeholder='Please write your order notes ...'
          />
          
      </Form>
    </Container>
  );
};

export default Checkout;
