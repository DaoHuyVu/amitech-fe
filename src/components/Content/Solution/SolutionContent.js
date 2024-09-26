import React, {useEffect, useState} from "react";
import Banner from "../../common/BannerWrapper";
import imageBanner from "../../../assets/banner/giaiphap.png";
import { Link } from "react-router-dom";
const DigitalSolutionsPage = () => {
  
  useEffect(()=>{
    const fetchSolutionDetail = () => {
      
    }
    fetchSolutionDetail()
  },[])
  return (
      <main className="digital-solutions">
        <Banner
            imgSrc={imageBanner}
            title="GIẢI PHÁP CHUYỂN ĐỔI SỐ"
            description="Cung cấp các giải pháp chuyển đổi số hàng đầu"
        />
      </main>
  );
};
