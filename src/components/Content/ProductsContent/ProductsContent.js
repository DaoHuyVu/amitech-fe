import {useEffect, useState}  from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '../../card/Card'
import CardTitle from '../../card/CardTitle'
import CardCategory from '../../card/CardCategory'
import CardContent from '../../card/CardContent'
import Image11Card from '../../card/Image11Card'
import {getPostProfile,getNavigationIdImageCover} from '../../../services/util'
import { getPostDetailById, getPostsByNavigationId } from "../../../services/post";
import Banner from '../../common/BannerWrapper'
import Pagination from '../Pagination/Pagination'
import './product.css'
const pageSize = 4
export default function ProductsContent(){
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
        const res = await getPostDetailById(5)
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
        const res = await getPostsByNavigationId(5,page,pageSize)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  },[page])
  
  const filterLabels = pageDetails ? pageDetails.attributes.subCategories.data.map((e)=>{
    return e.attributes.name
  }) : null

  filterLabels && filterLabels.unshift("Tất cả")

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
      <main id='industrial__products'>
        <div className="container ">
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
          <div className="row g-4 mb-4">
            {
              filteredPosts && filteredPosts.map((e,idx)=>{
                return (
                  <Card key={idx} className="col-12 col-md-6 col-xl-4 col-xxl-3">
                    <Image11Card src={getPostProfile(e)}/>
                    <CardContent style={{backgroundColor : '#666666'}}>
                      <CardCategory style={{color : '#ffffffb2'}}>{e.attributes.subCategories.data.attributes.name}</CardCategory>
                      <Link key={idx} to={`${location.pathname}/${e.attributes.slug}`}>
                        <CardTitle maxLines={2} >{e.attributes.postTitle}</CardTitle>
                      </Link>
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