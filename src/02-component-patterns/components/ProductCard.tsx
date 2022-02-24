import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Props {
    product: Product
}

interface Product {
    id: string,
    title: string,
    img?: string
}


export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct();
    
    return (
        <div className={styles.productCard}>
            {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug"  /> */}
            <img src={ (product.img? product.img: noImage ) } alt="por definir" className={ styles.productImg } />

            <span className={styles.productDescription}>Coffee Mug</span>

            <div className={styles.buttonsContainer}>

                <button 
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy(-1)}> - </button>
                <div className={ styles.countLabel}> { counter } </div>
                <button 
                    className={ styles.buttonAdd }
                    onClick={ () => increaseBy(1)}> + </button>

            </div>
            
        </div>
    )
}


