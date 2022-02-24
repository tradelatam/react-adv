import { ProductCard } from './ProductCard';

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
          <ProductCard product={ product }/>

        </div>
    </div>
  )
}
