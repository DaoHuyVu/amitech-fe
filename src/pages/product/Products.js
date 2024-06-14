// src/pages/Contact.js
import React from 'react';
import {Footer} from '../../components/footer/Footer';
import Header from "../../components/header2/Header";
import NewsContent from "../../components/Content/NewsContent/NewsContent";
import ProductsContent from "../../components/Content/ProductsContent/ProductsContent";

function Products() {
  return (
      <div>
        <Header/>
        <ProductsContent/>
        <Footer/>
      </div>
  );
}

export default Products;