// src/pages/Contact.js
import React from 'react';
import {Footer} from '../../components/footer/Footer';
import Header from "../../components/header2/Header";
import RecruitmentContent
  from "../../components/Content/Recruitment/RecruitmentContent";

function Recruitment() {
  return (
      <div>
        <Header/>
        <RecruitmentContent/>
        <Footer/>
      </div>
  );
}

export default Recruitment;