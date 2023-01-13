import React, { useContext, useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Store } from '../App';
import Product from '../Product/Product';
import { IProduct } from '../types';
import { countAllPrice } from '../helpers';
import ModalPage from './ModalPage';


const BasketPage = (): JSX.Element => {
  const [store, setStore] = useContext(Store)!;

  const numbersProductsInPage = [1, 3, 5, 10, 25];

  const [currentNumbersProducts, setCurrentNumbersProducts] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (page !== 1 && (uniqProducts.length % currentNumbersProducts) === 0 && (uniqProducts.length / currentNumbersProducts) < page) {
      setPage(page - 1)
    }
  }, [store]);

  const countNumbersProduct = (product: IProduct): number => {
    return store.products.filter((p: IProduct) => p === product).length;
  };

  const getDefaultDisableBtns = () =>
    store.products.filter(
      (p: IProduct) => countNumbersProduct(p) >= p.stock
    );

  const [disablePlusBtns, setDisablePlusBtns] = useState<IProduct[]>(getDefaultDisableBtns());

  const getUniqProducts = (): IProduct[] => {
    const uniqProducts: IProduct[] = [];
    store.products.forEach((product: IProduct) => {
      if (!uniqProducts.includes(product)) {
        uniqProducts.push(product);
      }
    });
    return uniqProducts;
  };
  const uniqProducts = getUniqProducts();

  const addProduct = (product: IProduct): void => {
    if (countNumbersProduct(product) < product.stock) {
      setStore({
        ...store,
        products: [...store.products, product],
      });
    }
    if (countNumbersProduct(product) + 1 === product.stock) {
      setDisablePlusBtns([...disablePlusBtns, product]);
    }
  };

  const removeProduct = (product: IProduct): void => {
    const indexProduct = store.products.lastIndexOf(product);
    const newProducts = [...store.products];
    newProducts.splice(indexProduct, 1);
    setStore({
      ...store,
      products: newProducts,
    });
    if (disablePlusBtns.includes(product)) {
      setDisablePlusBtns(disablePlusBtns.filter((p) => p !== product));
    }
  };

  const nextPage = () => {
    if (Math.ceil(uniqProducts.length / currentNumbersProducts) > page) {
      setPage(page + 1)
    }
  };

  const backPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  };


  return (
    <div className="basket-page">
      <div className="basket-page__field">
        <div className="basket-page__field-option">
          <div className="basket-page__field__description">
            <div className="basket-page__title">
              Product in Cart
              <p className="border">
                ITEMS:
                <Dropdown style={{ marginLeft: 5 }}>
                  <Dropdown.Toggle>
                    {currentNumbersProducts}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {numbersProductsInPage.map(
                      (option: number) => {
                        return (
                          <Dropdown.Item
                            active={
                              currentNumbersProducts ===
                              option
                            }
                            onClick={() => {
                              setCurrentNumbersProducts(
                                option
                              );
                              setPage(1);
                            }
                            }
                          >
                            {option}
                          </Dropdown.Item>
                        );
                      }
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </p>
              <div className="basket-page__field__choose-pages border ">
                PAGES:
                <div
                  className="count-product__circle"
                  style={{ marginLeft: 10 }}
                  onClick={() => backPage()}
                >
                  -
                </div>
                <p
                  className="count-product__number"
                  style={{ margin: '0 5px' }}
                >
                  {page}
                </p>
                <div
                  className="count-product__circle"
                  onClick={() => nextPage()}
                >
                  +
                </div>
              </div>
            </div>
            <div className="basket-page__field__description__catalog">
              {store.products.length
                ?
                uniqProducts
                  .map((product: IProduct, index: number) => (
                    <div className="basket-page__catalog">
                      <div className="basket-page__number-product">
                        <div className="count-product__circle">
                          {index + 1}.
                        </div>
                      </div>
                      <Product
                        key={product.id}
                        product={product}
                      />
                      <div className="count-product">
                        <div
                          className="count-product__circle"
                          onClick={() =>
                            removeProduct(product)
                          }
                        >
                          -
                        </div>
                        <div className="count-product__number">
                          {countNumbersProduct(product)}
                        </div>
                        <div
                          className="count-product__circle"
                          style={{
                            backgroundColor:
                              disablePlusBtns.includes(
                                product
                              )
                                ? '#b7b7b7'
                                : ''
                          }}
                          onClick={() =>
                            addProduct(product)
                          }
                        >
                          +
                        </div>
                      </div>
                    </div>
                  ))
                  .slice(
                    page * currentNumbersProducts - currentNumbersProducts,
                    page * currentNumbersProducts
                  )


                : <p>Basket is empty</p>}

            </div>
          </div>
          <div className="basket-page__summary">
            <div className="basket-page__title">Summary</div>
            <div
              style={{ marginTop: 10 }}
              className="basket-page__summary__count-product"
            >
              Products: {store.products.length}{' '}
            </div>
            <div
              style={{ margin: '10px 0' }}
              className="basket-page__summary__total"
            >
              Total: € {countAllPrice(store.products)}
            </div>
            <Button
              style={{ margin: '10px 0' }}
              onClick={() => { setModalOpen(true) }}
              disabled={!store.products.length}
            >
              BUY NOW
            </Button>
            {modalOpen && <ModalPage setOpenModal={setModalOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
