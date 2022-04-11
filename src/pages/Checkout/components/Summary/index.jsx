import React from 'react';
import { Link } from 'react-router-dom';
import Section from './components/Section';
import Table from './components/Table';
import Buttons from './components/Buttons';


Section.Table = Table;
Section.Buttons = Buttons;

const Summary = ({...props}) =>  (
  <Section>
    <h2 style={{'textAlign':'center'}}>Order summary</h2>
    <Section.Table />
    <Section.Buttons>
      <button type='submit' form='myform'>Place order</button>
      <Link to='/cart'>
        <button>Go back to cart</button>
      </Link>
    </Section.Buttons>
  </Section>
);


export default Summary;
