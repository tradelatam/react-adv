import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string,    
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({img='', className, style} : Props) => {

    const {product} = useContext(ProductContext);
    let imageToShow ='';

    if (img) {
        imageToShow = img;
    } else if( product.img) {
        imageToShow = product.img;
    } else {
        imageToShow = noImage;
    }

    return (
        <img src={ imageToShow } alt="Product image" className={ `${styles.productImg} ${className}` } style={style} />
    )
}