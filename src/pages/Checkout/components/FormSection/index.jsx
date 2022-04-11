import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { firstNameError, emailError, pcError, notesError } from './errorConfig';
import Form from './components/Form';
import Label from './components/Label';
import ValidateAlert from './components/ValidateAlert';


const Input = styled.input`
  outline: none;
  border: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
`;

Form.Input = Input;
Form.TextArea = TextArea;
Form.Label = Label;
Form.ValidateAlert = ValidateAlert;

const FormSection = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log('form errors', errors);
  const alertTextFirstName = firstNameError(errors.firstName?.type);
  const alertTextEmail = emailError(errors.email?.type);
  const alertTextPC = pcError(errors.pc?.type);
  const alertTextNotes = notesError(errors.notes?.type);
  
  return(
    <Form id='myform' onSubmit={handleSubmit(onSubmit)}>
      <Form.Label >First Name</Form.Label>
      <Form.Input 
        type="text" 
        placeholder="First name"
        {...register("firstName", {required: true, maxLength: 20})} 
      />
      {errors && <Form.ValidateAlert>{alertTextFirstName}</Form.ValidateAlert>}
      <Form.Label >Email</Form.Label>
      <Form.Input 
        type="email" 
        placeholder="email ..."
        {...register("email", {required: true, maxLength: 50, minLength: 5})} 
      />
      {errors && <Form.ValidateAlert>{alertTextEmail}</Form.ValidateAlert>}
      <Form.Label >Postal code</Form.Label>
      <Form.Input 
        type="number" 
        placeholder="Postal code ..."
        {...register("pc", {required: true, max: 99999, min: 1})} 
      />
      {errors && <Form.ValidateAlert>{alertTextPC}</Form.ValidateAlert>}
      <Form.Label >Order notes</Form.Label>
      <Form.TextArea 
        placeholder="Order notes..."
        {...register("notes", {required: true, maxLength: 250})} 
      />
      {errors && <Form.ValidateAlert>{alertTextNotes}</Form.ValidateAlert>}
    </Form>
  )
}

export default FormSection;
