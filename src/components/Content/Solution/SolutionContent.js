import React, {useEffect, useState} from "react";
import Banner from "../../common/BannerWrapper";
import { Link, useLocation } from "react-router-dom";
import Card from '../../card/Card'
import ImageCard from '../../card/ImageCard'
import CardContent from '../../card/CardContent'
import CardTitle from '../../card/CardTitle'
import CardDescription from '../../card/CardDescription'
import {getNavigationIdImageCover} from '../../../services/util'
import { getSolutionDetailsById } from "../../../services/solution";
import './solution.css'
import Pagination from '../Pagination/Pagination'
import aspect23Wrapper from "../../card/aspectWrapper/aspect23Wrapper";
export default function SolutionContent(){
  const [data,setData] = useState(null)
  const location = useLocation()
  useEffect(()=>{
    const fetchSolutionDetail = async () => {
      try{
        const res = await getSolutionDetailsById(4)
        setData(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchSolutionDetail()
  },[])
  return (
    <>
       {
          data &&
          <Banner
            imgSrc={getNavigationIdImageCover(data)}
            title={data.attributes.name}
            description={data.attributes.description}
          />
        }
        <div id="solution">
          <div className="container mb-4">
            {
              data && 
              data.attributes.childrenNavigations.data.map((e,index)=>{
                return(
                  <Card className='row pb-4' key={index}>
                      <div className="col-12 col-xl-6 px-0">
                        <ImageCard src={getNavigationIdImageCover(e)} AspectWrapper={aspect23Wrapper}/>
                      </div>
                      <CardContent className="col-12 col-xl-6" style={{backgroundColor : '#f4f9ff'}}>
                        <CardTitle 
                        maxLines={2} 
                        style={{color : '#4d4d4d',fontWeight:'700',width : '100%',fontSize:'30px'}}>
                          {e.attributes.name}
                        </CardTitle>
                        <CardDescription coverRemain={false} style={{color : '#4d4d4db2'}}>{e.attributes.description}</CardDescription>
                        <Link style={{color : '#00c2ff'}} to={`${location.pathname}${e.attributes.slug}`}>
                          Xem thêm &gt;&gt;
                        </Link>
                      </CardContent>
                  </Card>
                )
              })
            }
          </div>
          <Pagination 
            pageInfo={{
              page : 1,
              pageCount : 1
            }}
          />
       </div>
    </>
      
  );
};

