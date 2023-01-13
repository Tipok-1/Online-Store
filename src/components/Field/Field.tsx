import React from "react";
import ProductField from "../ProductField/ProductField";
import Toolbar from "../Toolbar/Toolbar";
import { data } from '../products';
import { IProduct } from "../types";
import '../Field/Field.css'


const Field = (): JSX.Element => {
  const ALL_PRODUCTS = data.products;
  const [filterProducts, setfilterProducts] = React.useState(ALL_PRODUCTS);

  function WasSetFilter(arr: IProduct[]) {
    setfilterProducts(arr);
  }

  const FilterProducts = React.useMemo(() => {
    return filterProducts;
  }, [filterProducts])

  return (
    <div className='field'>
      <Toolbar products={ALL_PRODUCTS} WasSetFilter={WasSetFilter} />
      <ProductField products={FilterProducts} />
    </div>
  )
}

export default Field;