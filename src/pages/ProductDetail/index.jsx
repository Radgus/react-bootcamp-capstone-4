import React, { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import Gallery from "./Gallery";
import ExpandCard from "./ExpandCard";
import ProductContext from '../../state/productContext';
import {Container,Card,Wrapper,Title,Description,Shopping,Price,
  Span,Money,Buttom,Tags,Ul,Amount,Math} from './styles';


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const fetchProducts = useFeaturedProducts().data.results;
  const [counter, setCounter] = useState(1);
  const { productId } = useParams();
  const {productsInCart, setProductsInCart} = useContext(ProductContext);

  useEffect(() => {
    if (productId !== null && fetchProducts !== null && 
        fetchProducts !== undefined && fetchProducts.length > 0 ) {
      const productSelected = fetchProducts.filter(item => item.id === productId);
      setProduct({...productSelected[0]});
    }
  }, [fetchProducts, productId]);

  const handleAddToCard = (item) => {
    console.log('enviar al carrito: ', item);
    const obj = {
      amount: counter,
      product: item,
    }
    const currentProducts = [...productsInCart];
    const mergeProducts = currentProducts.concat(obj);
    setProductsInCart(mergeProducts);
  }

  const handleCounter = (operation,stock) => {
    if (operation === 'add') {
      setCounter(counter=> counter+1 > stock ? stock : counter+1);
    }
    if (operation === 'subtract') {
      setCounter(counter=> counter-1 < 1 ? 1 : counter-1);
    }
  }

  return (
    <Container>

      <Gallery product={product} />
      
      <Card>
        <Wrapper>
          <h3>Category: {product?.data?.category?.slug}</h3>
          <Tags>
            <h4>Tags:</h4>
            <Ul>
              {
                product?.tags?.map(tag => <li key={tag}>{tag}</li>)
              }
            </Ul>
          </Tags>
            
          <Title>
            <h2>{product?.data?.name}</h2>
          </Title>
          <Description>
            <p>{product?.data?.short_description}</p>
          </Description>
        </Wrapper>
        <Shopping>
          <div className="shopping__price">
            <Price>Price</Price>
            <Money><Span>$</Span>{product?.data?.price}</Money>
            <br />
            <p><b>SKU: </b>{product?.data?.sku}</p>
            <p><b>In stock: </b>{product?.data?.stock}</p>
          </div>
          <div className="shopping__addtocard">
            <Amount>
              <div className='column'>
                <div className='column__counter'>{counter}</div>
              </div>
              <div className='column'>
                <Math>
                  <div 
                    className='math__section divider' 
                    onClick={()=>handleCounter('add',product?.data?.stock)}
                  >
                    +
                  </div>
                  <div 
                    className='math__section'
                    onClick={()=>handleCounter('subtract',product?.data?.stock)}
                  >
                    -
                  </div>
                </Math>
              </div>
            </Amount>
            {
              product?.data?.stock !== 0 &&
              <Buttom type="button" onClick={()=>handleAddToCard(product)}>Add to Cart</Buttom>
            }
          </div>
        </Shopping>

      </Card>

      <ExpandCard product={product} />

    </Container>
  )
}

export default ProductDetail;
