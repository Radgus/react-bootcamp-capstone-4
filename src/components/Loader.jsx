import styled, { keyframes } from 'styled-components';

const spinerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation-name: ${spinerAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  display: flex;
  flex: 1 0 auto;
`;

export default Loader;
