import {useEffect, useState}  from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '../../card/Card'
import CardTitle from '../../card/CardTitle'
import CardCategory from '../../card/CardCategory'
import CardContent from '../../card/CardContent'
import ImageCard from '../../card/ImageCard'
import {getPostProfile,getNavigationIdImageCover, convertUTCPlus7} from '../../../services/util'
import { getPostDetailById} from "../../../services/post";
import Banner from '../../common/BannerWrapper'
import Pagination from '../Pagination/Pagination'
import './news.css'
import { faClock} from "@fortawesome/free-solid-svg-icons";
import aspect23Wrapper from "../../card/aspectWrapper/aspect23Wrapper";
import aspect47Wrapper from "../../card/aspectWrapper/aspect47Wrapper";
import CardDescription from "../../card/CardDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPostCategory } from "../../../services/util";
import Slider from "react-slick";
import { getNewsPostsById } from "../../../services/news";
import { useTranslation } from "react-i18next";

export default function News(){
  const {t} = useTranslation()
  const [pageDetails,setPageDetails] = useState(null)
  const [selectedOption,setSelectedOption] = useState(0)
  const [posts,setPosts] = useState(null)
  const [page,setPage] = useState(1)
  const location = useLocation()
  const handleChangeOption = (idx) => {
    setSelectedOption(idx)
  }
  const handlePageChange = (page) => {
    setPage(page)
  }
  useEffect(()=>{
    const fetchPageDetails = async () => {
      try{
        const res = await getPostDetailById(window.localStorage.getItem('lang') === '0' ? 6 : 55)
        setPageDetails(res.data.data)
      }catch(err){
        console.log(err)
      }
    } 
    fetchPageDetails()
  },[])
  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const res = await getNewsPostsById(window.localStorage.getItem('lang') === '0' ? 6 : 55)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  },[page])
  const carouselItems = posts ? posts.data.slice(5,8).map((e,index) => {
    return (
         <Card key={index} className='d-flex'>
             <ImageCard src={getPostProfile(e)} AspectWrapper={aspect47Wrapper}/>
             <CardContent style={{backgroundColor : '#F1F7FF',minHeight : '300px'}}>
                 <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{getPostCategory(e)}</CardCategory>
                 <CardTitle maxLines='1' style={{color : '#4d4d4d'}}>{e.attributes.postTitle}</CardTitle>
                 <CardDescription coverRemain='false' style={{color : '#4d4d4db2'}}>{e.attributes.excerp}</CardDescription>
                 <Link to={`/tin-tuc-va-su-kien/${e.attributes.slug}`} style={{color : '#00c2ff',fontWeight : 'bold'}}>
                     {t('button-xem-them')} &gt;&gt;
                 </Link>
             </CardContent>
         </Card>
    ) 
 })  : null
 const carouselSettings = {
     dots: true,
     slidesToShow : 1,
     slidesToScroll : 1,
     infinite : true,
     speed : 1000,
     autoplay : true,
     autoplaySpeed : 5000,
     appendDots : dots => (
         <div style={{textAlign : 'start',bottom : '0px'}}>
           <ul className='ps-3'> {dots} </ul>
         </div>
     )
 }
 const newsColumns = posts ? (
      <>
        <div className="col-12 col-md-6">
          {
            posts.data.slice(8,10).map((e,idx)=>{
              return (
                <div className="col-12" key={idx}>
                  <Card className='d-flex'>
                  <ImageCard src={getPostProfile(e)} AspectWrapper={aspect47Wrapper}/>
                  <CardContent style={{backgroundColor : '#F1F7FF'}}>
                      <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{getPostCategory(e)}</CardCategory>
                      <CardTitle maxLines='3' style={{color : '#4d4d4d',textTransform : 'none'}} >{e.attributes.postTitle}</CardTitle>
                      <Link to={`'/tin-tuc-va-su-kien/${e.attributes.slug}`} style={{color : '#00c2ff',fontWeight : 'bold'}}>
                          {t('button.xem-them')} &gt;&gt;
                      </Link>
                  </CardContent>
                  </Card>
                </div>
              )
            })
          }
        </div>
        <div className="col-12 col-md-6 d-flex flex-column" style={{color : '#4d4d4d'}}>
          <h1 className="fw-bold mb-4 text-uppercase">{t('common.tin-moi-nhat')}</h1>
          {
            posts && posts.data.slice(0,5).map((e,idx)=>{
              return (
                <CardContent key={idx} className="p-0 ">
                  <Link to={`/tin-tuc-va-su-kien/${e.attributes.slug}`} >
                    <CardTitle maxLines={2} style={{color : '#4d4d4d',textTransform : 'none'}}>{e.attributes.postTitle}</CardTitle>
                  </Link> 
                <CardCategory className="text-uppercase">{getPostCategory(e)}</CardCategory>
                {idx !== 4 && <div style={{border : '1px solid #4d4d4db2',width : '100%'}} />}
                </CardContent>
              )
            })
          }
        </div>
      </>
      
 ) : null

  const filterLabels = pageDetails ? pageDetails.attributes.subCategories.data.map((e)=>{
    return e.attributes.name
  }) : null

  filterLabels && filterLabels.unshift(t('common.tat-ca'))

  const filteredPosts = posts ? (selectedOption === 0 ? posts.data : posts.data.filter(e => e.attributes.subCategories.data.attributes.name === filterLabels[selectedOption])) : null 
  return(  
    <>
      {
        pageDetails && 
        <Banner 
          imgSrc={getNavigationIdImageCover(pageDetails)}
          title={pageDetails.attributes.name}
          description={pageDetails.attributes.description}
        />
      }
      <main id='page-news'>
        <div className="container">
          <div className="row justify-content-center mb-4">
            {
              filterLabels && filterLabels.map((e,idx)=>{
                return (
                  <button 
                  key={idx} 
                  type='button' 
                  className={`btn btn-outline-primary m-2 col-9 col-sm-5 col-lg-auto fw-bold ${idx === selectedOption ? 'active' : ''}`}
                  onClick={ () => handleChangeOption(idx)}>
                    {e}
                  </button>
                )
              })
            }   
          </div>
          
          <div className="row  h-100 mb-5 d-flex flex-row gy-4">
            <div className="col-12 col-xl-6 ">
                <Slider {...carouselSettings} className='custom-carousel h-100 custom-carousel__button--disabled'>
                    {posts && carouselItems}
                </Slider>
            </div>
            <div className="col-12 col-xl-6 ">
                <div className="row gy-4">
                    {posts && newsColumns}
                </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            {
              filteredPosts && filteredPosts.map((e,idx)=>{
                return (
                  <Card key={idx} className="col-12 col-md-6 col-xl-4 col-xxl-3">
                    <ImageCard src={getPostProfile(e)} AspectWrapper={aspect23Wrapper}/>
                    <CardContent>
                      <CardCategory style={{color : '#4d4d4db2',textTransform : 'uppercase'}}>{e.attributes.subCategories.data.attributes.name}</CardCategory>
                      <Link key={idx} to={`${location.pathname}/${e.attributes.slug}`}>
                        <CardTitle maxLines={2} style={{color : '#4d4d4d',textTransform : 'none'}}>{e.attributes.postTitle}</CardTitle>
                      </Link>
                      <CardDescription style={{color : '#4d4d4db2'}}>
                        <FontAwesomeIcon icon={faClock} />
                        {` ${convertUTCPlus7(e.attributes.postDate)}`}  
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })
            }      
          </div>
          {
            posts && 
            <Pagination pageInfo={{
              page : page,
              pageCount : posts.meta.pagination.pageCount
            }} 
            fetchPageItems = {(page) => handlePageChange(page)}
            />
          }
        </div>
      </main>
    </>
  )
}