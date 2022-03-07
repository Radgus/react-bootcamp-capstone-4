import { render } from '@testing-library/react';
import App from './App';

// Testeamos el logo mediante la propiedad atributo alt

describe('Ecommerce Store logo/name appears in the Header', () => {
  it('Logo', () => {
    const {getByAltText} = render(<App/>)
    getByAltText("shoppingCarIcon");
  })
});
