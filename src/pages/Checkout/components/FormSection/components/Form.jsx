import React from 'react';
import styled from 'styled-components'


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

export default Form;
