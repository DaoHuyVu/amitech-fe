// src/pages/Contact.js
import React from 'react';
import {Footer} from '../../components/footer/Footer';
import Header from "../../components/header2/Header";
import ProductsContent
  from "../../components/Content/ProductsContent/ProductsContent";
import DetailNewsContent
  from "../../components/Content/NewsContent/DetailNewsContent";

function News() {
  return (
      <div>
        <Header/>
        <DetailNewsContent/>
        <Footer/>
      </div>
  );
}

export default News;