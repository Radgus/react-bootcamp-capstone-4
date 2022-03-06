import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;


const Footer = () => (
  <Section>
    <footer>
      <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </footer>
  </Section>
);

export default Footer;
