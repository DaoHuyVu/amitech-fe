// src/pages/Contact.js
import React from 'react';
import {Footer} from '../../components/footer/Footer';
import ContactContent from "../../components/Content/MainContent/ContactContent";
import Header from "../../components/header2/Header";

function Contact() {
  return (
      <div>
        <Header/>
        <ContactContent/>
        <Footer/>
      </div>
  );
}

export default Contact;