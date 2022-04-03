import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1rem;
  border: 0.1rem solid gray;
`;

export const ContainerHeader = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: #DCDCDC;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrashIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const ContainerItemSection = styled.div`
  margin: 0.5rem 0;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const ImgContainer = styled.div`
  max-width: 25%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 0.5rem;
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 0 1rem;
  margin: 1rem 0;
  > * {
   margin-top : 0.3rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;

export const Summary = styled.div`
  width: 35%;
  margin: 1rem 0;
  padding: 0 1rem;
  > :nth-child(2){
    margin-top: 0.5rem;
  }
`;

export const Concept = styled.div`
  display: flex;
  justify-content: space-between;
`;
