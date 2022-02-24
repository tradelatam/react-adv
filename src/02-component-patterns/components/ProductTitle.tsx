import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
    title?: string,    
    className?: string;
}

export const ProductTitle = ({title, className}: Props) => {
    const {product} = useContext(ProductContext);

    return (
        <span className={`${className} ${styles.productDescription}`}>
            {title? title: product.title}
        </span>
    )
}