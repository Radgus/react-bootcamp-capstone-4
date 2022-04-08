import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.section`
  .alfaOmega {
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    h3 {
      width: 6rem;
      height: 3rem;
      border: 0.1rem solid gray;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
  nav {
    padding: 3rem 0 2rem 0;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin: 0 auto;
    p {
      min-width: 2rem;
      border: 0.2rem solid #DCDCDC;
      cursor: pointer;
      font-size: 1.8rem;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: black;
      border-radius: 0.5rem;
      &:hover {
        background-color: brown;
        color: white;
      }
    }
    p:first-child{
      border: 0.2rem solid red;
    }
  }
`;

const Pagination = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Pagination.propTypes = {
  children: PropTypes.element,
}

export default Pagination;
