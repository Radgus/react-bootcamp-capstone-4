import styled from 'styled-components';
import Colors from '../utils/colors';

export const Divider = styled.div`
  border: 1px solid ${Colors['BG-C']};
`;

export const DividerSpace = styled(Divider)`
  margin: ${(props) => props.margin ? props.margin : '2rem 0'};
`;

export const Main = styled.main`
  margin: 0 8%;
`;
