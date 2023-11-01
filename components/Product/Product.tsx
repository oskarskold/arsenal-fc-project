'use client';
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/sanity/sanity-utils';
import { ProductType } from '@/types';
import { Page } from '@/types';
import Pagination from '../UI/Pagination';
import ProductList from './ProductList';
import FeaturedProduct from './FeaturedProduct';

type Props = {
  pageData: Page | undefined;
};

const PAGE_SIZE = 3; // Adjust the page size according to your requirement

const Product = ({ pageData }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        // Handle any errors
        console.error('An error occurred:', error);
      }
    };

    fetchProducts();
  }, []);

  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const featuredProducts = products.filter((product) => product.featured === true);

  return (
    <>
      <FeaturedProduct featuredProducts={featuredProducts} />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PAGE_SIZE}
        onPageChange={(selectedPage) => setCurrentPage(selectedPage)}
      />
    </>
  );
};

export default Product;
