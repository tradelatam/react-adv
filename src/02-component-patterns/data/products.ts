import { Product } from "../interfaces/interfaces";

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
  
export  const products: Product[] = [product1, product2];