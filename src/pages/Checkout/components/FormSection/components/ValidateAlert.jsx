import React from 'react';
import styled from 'styled-components'

const RedAlert = styled.p`
  color: darkmagenta;
  margin: 0.4rem 0;
  padding: 0 1rem;
  font-family: cursive;
`;

const ValidateAlert = ({children, ...props}) => <RedAlert {...props}>{children}</RedAlert>

export default ValidateAlert;
