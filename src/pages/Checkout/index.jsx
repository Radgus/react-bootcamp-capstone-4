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

const Wrapper = styled.div`
  padding: 0 1rem;
  > * {
   margin-top : 0.3rem;
  }
`;

// Input component INICIO

const Layout = styled.div`
  height: 4rem;
  border-radius: 0.5rem;
  /* box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc; */
  /* border: 0.1rem solid gray; */
  label {
    padding: 0 1rem;
    color: blue;
    font-weight: 600;
    font-size: small;
  }
  input {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    outline: none;
    border-radius: 0.5rem;
    border: none;
    height: 3rem;
    padding: 0 1rem;
    width: 100%;
    margin: 0.5rem 0;
  }
`;

const Input = ({value, cb, label, type, name, placeholder}) => {

  return(
    <Layout>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={cb}
        placeholder={placeholder}
      />
    </Layout>
  );
};

// Input component FIN


const Checkout = () => {
  const initalState = { 
    name:'',
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
      <h1 style={{'textAlign':'center'}}>Customer information</h1>
      <DividerSpace margin='1rem 0'/>
      <form action="">
        <Wrapper>
          <Input
            value={form.name}
            cb={handleInput}
            label='Name'
            type='Text'
            name='name'
            placeholder='Please write your name ...'
          />
        </Wrapper>
      </form>
    </Container>
  );
};

export default Checkout;
