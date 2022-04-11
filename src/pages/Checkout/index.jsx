import React from 'react';
import Section from './components/Section';
import { DividerSpace } from '../../components/Mix';
import FormSection from './components/FormSection';
import Summary from './components/Summary';


Section.DividerSpace = DividerSpace;
Section.FormSection = FormSection;
Section.Summary = Summary;

const Checkout = () => (
  <Section>
    <h2 style={{'textAlign':'center'}}>Customer information</h2>
    <Section.DividerSpace margin='1rem 0'/>
    <Section.FormSection />
    <Section.Summary />
  </Section>
);

export default Checkout;
