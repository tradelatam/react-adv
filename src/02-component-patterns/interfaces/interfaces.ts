import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

/* Para obligar a poner bien los props en */
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element, 
    Title: ({ title, className }: ProductTitleProps) => JSX.Element,
    Image: ({ img, className }: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: ProductButtonsProps) => JSX.Element    
}