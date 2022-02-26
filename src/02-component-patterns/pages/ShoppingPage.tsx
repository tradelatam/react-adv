import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping store</h1>
        <hr />

        <ProductCard
            product={ product }
            className="bg-dark text-white"
            initialValues={{
                count:4,
                maxCount:12
            }}
        >
            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons"/>
        </ProductCard>

    </div>
  )
}
