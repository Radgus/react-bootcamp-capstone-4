import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  
`;

export const Wrapper = styled.div`
  padding: 5% 5% 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin: 1rem 0;
`;

export const Description = styled.div`
  p {
    font-size: 1.2rem;
  }
`;

export const Shopping = styled.div`
  padding: 0.5rem 10%;
  display: flex;
  align-items: center;
  .shopping__price {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  .shopping__addtocard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 100%;
  }
`;

export const Price = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Money = styled.p`
  font-size: 2.2rem;
  font-family: 'Times New Roman', Times, serif;
`;

export const Buttom = styled.button`
  width: 55%;
  height: 4rem;
  border-radius: 1rem;
  cursor: pointer;
  color: deeppink;
  border: 0.1rem solid gray;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  :hover {
    background-color: black;
  }
`;

export const Tags = styled.div`
  margin-top: 1rem;
  display: flex;
  h4 {
    font-size: 1.2rem;
  }
`;

export const Ul = styled.ul`
  width: -webkit-fill-available;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-around;
  padding-left: 3rem;
`;

export const Amount = styled.div`
  width: 40%;
  height: 5rem;
  border-radius: 1rem;
  color: deeppink;
  border: 0.1rem solid gray;
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  .column {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .column__counter {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0.1rem solid gray;
  }

`;

export const Math = styled.div`
  width: 100%;
  height: 100%;
  .math__section {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    font-size: 2.5rem;
    :hover {
      background-color: black;
    }
  }
  .divider {
    border-bottom: 0.1rem solid gray;
  }
`;