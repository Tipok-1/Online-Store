import React, { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { IProduct, IOption } from "../types";
import Category from "../Category/Category";
import SliderSort from "../SliderSort/SliderSort";
import '../Toolbar/Toolbar.css'
import '../App.css'


const Toolbar = (props: { products: IProduct[], WasSetFilter: (arr: IProduct[]) => void }): JSX.Element => {
  const resetFilters = 'Reset Filters';

  const [filter, setFilter] = React.useState<{ category: string[], brand: string[] }>({ category: [], brand: [] });
  const [products] = React.useState(props.products);


  function getUniqOption(point: string): IOption[] {
    const uniqCategory: Set<string> = new Set();

    props.products.forEach(product => {
      if (Object.prototype.hasOwnProperty.call(product, point)) {
        const key = point as keyof IProduct;
        uniqCategory.add(product[key] as string);
      }
    });
    const CategoryWhithValues: IOption[] = [];
    [...uniqCategory].forEach(p => CategoryWhithValues.push({ name: p, value: `${p}_value` }));

    return CategoryWhithValues;
  }
  const firstFilter = getUniqOption('category');
  const secondFilter = getUniqOption('brand');

  function addFilterCategory(add: boolean, fil: string) {

    if (add) {
      setFilter({ ...filter, category: [...filter.category, fil] });
    }
    else {
      const copy = Object.assign([], filter.category);
      copy.splice(copy.indexOf(fil), 1);
      setFilter({ ...filter, category: copy });
    }
  }
  function addFilterBrand(add: boolean, fil: string) {

    if (add) {
      setFilter({ ...filter, brand: [...filter.brand, fil] });
    }
    else {
      const copy = Object.assign([], filter.brand);
      copy.splice(copy.indexOf(fil), 1);
      setFilter({ ...filter, brand: copy });
    }
  }
  const [sortedByCategory, setSortedByCategory] = React.useState<IProduct[]>([]);
  function returnedSortedByCategory(arr: IProduct[]) {
    setSortedByCategory(arr);
  }
  const [sortedByBrand, setSortedByBrand] = React.useState<IProduct[]>([]);
  function returnedSortedByBrand(arr: IProduct[]) {
    setSortedByBrand(arr);
  }
  const sortedBrandAndCategory = useMemo(() => {
    return products.filter(el => sortedByCategory.includes(el) && sortedByBrand.includes(el));
  }, [sortedByBrand, sortedByCategory])

  const [lastLength, setLastLength] = React.useState(0);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [minStock, setMinStock] = React.useState(0);
  const [maxStock, setMaxStock] = React.useState(0);
  const [minS, setMinS] = React.useState(0);
  const [maxS, setMaxS] = React.useState(0);
  const [reset, setReset] = React.useState(false);

  function ChangePrice(obj: { min: number, max: number }) {
    setMin(obj.min);
    setMax(obj.max);
  }
  function ChangeStock(obj: { min: number, max: number }) {
    setMinS(obj.min);
    setMaxS(obj.max);
  }

  const AllSorted = useMemo(() => {
    return sortedBrandAndCategory.filter(el => (el.price >= min && el.price <= max))
      .filter(el => (el.stock >= minS && el.stock <= maxS));

  }, [sortedBrandAndCategory, min, max, minS, maxS])

  useEffect(() => {
    if (AllSorted.length != lastLength) {
      setLastLength(AllSorted.length);
      props.WasSetFilter(AllSorted);
    }
  }, [AllSorted])

  useEffect(() => {
    let min = 1000;
    let max = 0;
    let mnSt = 1000;
    let mxSt = 0;
    sortedBrandAndCategory.forEach((el) => {
      if (el.price <= min) { min = el.price; }
      if (el.price >= max) { max = el.price; }
      if (el.stock <= mnSt) { mnSt = el.stock }
      if (el.stock >= mxSt) { mxSt = el.stock }
    })
    setMinPrice(min);
    setMaxPrice(max);
    setMinStock(mnSt);
    setMaxStock(mxSt);
  }, [sortedBrandAndCategory])

  function resetFilter() {
    setFilter({ category: [], brand: [] });
    setMinPrice(0);
    setMaxPrice(0);
    setMinStock(0);
    setMaxStock(0);
    setReset(true)
  }

  return (
    <div className='toolbar'>
      <SliderSort
        title={'Price'}
        min={minPrice}
        max={maxPrice}
        onChange={ChangePrice}
        postscript={'€'}
      ></SliderSort>
      <SliderSort
        title={'Stock'}
        min={minStock}
        max={maxStock}
        onChange={ChangeStock}
      ></SliderSort>
      <Category
        options={firstFilter}
        title={'Category'}
        filter={filter.category}
        onClick={addFilterCategory}
        products={products}
        property={'category'}
        returnedArray={returnedSortedByCategory}
        reset={reset}
        setReset={setReset}
      ></Category>
      <Category
        options={secondFilter}
        title={'Brand'}
        filter={filter.brand}
        onClick={addFilterBrand}
        property={'brand'}
        products={products}
        returnedArray={returnedSortedByBrand}
        reset={reset}
        setReset={setReset}
      ></Category>
      <Button onClick={resetFilter}>{resetFilters}</Button>
    </div>
  )
}

export default Toolbar;