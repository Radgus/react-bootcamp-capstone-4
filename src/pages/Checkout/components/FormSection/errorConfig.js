
export const firstNameError = (error) => {
  switch (error) {
    case 'required':  return 'First name is required'
    case 'maxLength':  return 'Max length is 20 characters'
    default:  return '';
  }
}

export const emailError = (error) => {
  switch (error) {
    case 'required':  return 'email is required'
    case 'maxLength':  return 'Max length is 50 characters'
    case 'minLength':  return 'Min length is 5 characters'
    default:  return '';
  }
}

export const pcError = (error) => {
  switch (error) {
    case 'required':  return 'postal code is required'
    case 'max':  return 'Max number is 99999 characters'
    case 'min':  return 'Min number is 00001 characters'
    default:  return '';
  }
}

export const notesError = (error) => {
  switch (error) {
    case 'required':  return 'Order notes are required'
    case 'maxLength':  return 'Max length are 250 characters'
    default:  return '';
  }
}