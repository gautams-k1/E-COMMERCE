import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Componets/Breadcrum/Breadcrum';
import ProductDisplay from '../Componets/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Componets/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Componets/RelatedProducts/RelatedProduct';

export default function Product() {
  
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e)=>e.id ===Number(productId))

  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DiscriptionBox></DiscriptionBox>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}
