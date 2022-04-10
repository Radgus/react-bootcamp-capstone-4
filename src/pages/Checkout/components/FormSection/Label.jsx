import React from 'react';
import styled from 'styled-components';



const LabelContainer = styled.label`
  font-weight: 600;
  padding: 0 1rem;
  font-family: sans-serif;
`;

const Label = ({children, ...props}) => <LabelContainer {...props}>{children}</LabelContainer>

export default Label;
