import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 0 3% 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
`;

const Section = ({children, ...props}) => 
<Container {...props}>
  {children}
</Container>;

export default Section;
