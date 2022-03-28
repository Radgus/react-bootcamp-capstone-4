import styled from 'styled-components';
import Colors from '../../utils/colors';


export const Container = styled.div`
  display: flex;
  margin-right: 8%;
  flex: 1 0 auto;
.container__sidebar {
  width: ${(props) => props.collapsed ? '4.25rem' : '36%'};
  background-color: white;
  overflow-y: hidden;
}
.container__content {
  background-color: white;
  padding: 1rem;
  margin-left: 1rem;
  width: -webkit-fill-available;
}
`;

export const Sidebar = styled.section`
.sidebar__section {
  display: flex;
  align-items: center;
}
.sidebar__icon {
  min-width: 4rem;
  width: 4rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.check {
  height: 3rem;
}
.pointer {
  cursor: pointer;
}
.sidebar__bullet {
  width: 0.6rem;
  height: 0.6rem;
  background-color: black;
  border-radius: 50%;
}
`;

export const Pagination = styled.section`
/* display: flex; */
/* justify-content: right; */
/* align-items: center; */
width: 40rem;
.alfaOmega {
  /* width: 5rem; */
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
  width: 30rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 0 auto;
  p {
    min-width: 2rem;
    border: 0.2rem solid ${Colors['BG-C']};
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

export const NoProducts = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClearButton = styled.button`
  margin: 0.5rem auto;
  cursor: pointer;
  background-color: sandybrown;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  border: 0;
  padding: 0.8rem;
`;