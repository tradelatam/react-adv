import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug -Card',  
  img: './Coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',  
  img: './Coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState< { [key:string]: ProductInCart }>({});
  
  const onProductCountChange=( { count, product}: {count:number, product:Product })=> {
    //console.log('onProductCountChange', count, product); 
    setShoppingCart( oldShoppingCart => {

      if (count===0) {

        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        //console.log('toDelete', toDelete);
        return rest;
      }
 
      return {
        ...oldShoppingCart,
        [ product.id ]: { ...product, count }
      }
    })
  
  }

  
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            products.map( product => (
                <ProductCard 
                  key={product.id}
                  product={ product }
                  className="bg-dark text-white"
                  onChange={ onProductCountChange }
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                  <ProductTitle className="text-white" />
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>
            ))
          }
        </div>

        <div className="shopping-cart">            
            {
                Object.entries( shoppingCart ).map(([key, product])=> {
                  console.log(key, product);
                  return (
                      <ProductCard
                          key={key}
                          product={ product }
                          className="bg-dark text-white"
                          style={{ width: '100px' }}                  
                      >
                          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                          <ProductButtons 
                              className="custom-buttons"
                              style={{
                                display: 'flex',
                                justifyContent: 'center'
                              }}
                          />
                      </ProductCard>
                  )
                })
            }

                {/* <ProductCard
                  product={ product2 }
                  className="bg-dark text-white"
                  style={{ width: '100px' }}                  
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                  <ProductButtons 
                      className="custom-buttons"
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                  />
                </ProductCard> */}
                
        </div>
       

    </div>
  )
}
