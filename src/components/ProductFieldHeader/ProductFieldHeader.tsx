import React from "react";
import Found from "../Found/Found";
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";
import { IOption } from "../types"
import { discountASC, discountDESC, priceASC, priceDESC, ratingASC, ratingDESC } from "../ProductField/ProductField";
import '../ProductFieldHeader/ProductFieldHeader.css'

interface IFilter {
  sort: string,
  query: string
}
//const [searchParams, setSearchParams] = useSearchParams();
    /*React.useEffect(() =>{
        if(searchParams.get('search'))
        {
           props.setFilter({ ...props.filter, query: searchParams.get('search')});
        }
        if(searchParams.get('sort'))
        {
            props.setFilter({ ...props.filter, sort: searchParams.get('sort')});
        }
    },[])*/
const ProductFieldHeader = (props: { filter: IFilter, setFilter: React.Dispatch<React.SetStateAction<{ sort: string; query: string; }>>, found: number }): JSX.Element => {
  const sortBy = 'Sort by';
  const options: IOption[] = [
    { value: priceASC, name: `${sortBy} ${priceASC}` },
    { value: priceDESC, name: `${sortBy} ${priceDESC}` },
    { value: ratingASC, name: `${sortBy} ${ratingASC}` },
    { value: ratingDESC, name: `${sortBy} ${ratingDESC}` },
    { value: discountASC, name: `${sortBy} ${discountASC}` },
    { value: discountDESC, name: `${sortBy} ${discountDESC}` },
  ];

  const onChangeSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>): void => props.setFilter({ ...props.filter, query: (e.target as HTMLInputElement).value })
    , []);

  return (
    <div className='product__field__header'>
      <SortOptions
        value={props.filter.sort}
        onChange={selectedSort => props.setFilter({ ...props.filter, sort: selectedSort })}
        options={options} />
      <Found found={props.found} />
      <SearchProduct
        value={props.filter.query}
        onChange={onChangeSearch}
      />
    </div>
  )
}

export default ProductFieldHeader;