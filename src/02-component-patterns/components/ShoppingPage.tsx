import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug -Card',  
  img: './Coffee-mug.png'
}
export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title={'Hello world'}/>
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard 
            product={ product }
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-white"/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard>

        </div>
    </div>
  )
}
