import { useLoaderData } from "react-router-dom"
import { getPostDetail } from "../../../services/post"
import Banner from "../../common/BannerWrapper"
import { convertUTCPlus7, getPostProfile } from "../../../services/util"
import parser from 'html-react-parser'
import './news.css'
import { useEffect, useState } from "react"
import { getRelatedNewsPosts } from "../../../services/news"
import Card from "../../card/Card"
import ImageCard from "../../card/ImageCard"
import aspect34Wrapper from "../../card/aspectWrapper/aspect34Wrapper"
import CardContent from "../../card/CardContent"
import CardCategory from "../../card/CardCategory"
import CardTitle from "../../card/CardTitle"
export const loader = async ({params})=>{
    return await getPostDetail(params.slug)
}
export default function NewsDetail(){
    const data = useLoaderData()
    const [relatedPosts,setRelatedPosts] = useState(null)
    useEffect(()=>{
        const fetchRelatedPosts = async () => {
            try{
                const res = await getRelatedNewsPosts(data.attributes.slug,4,data.attributes.navigations.data[0].attributes.slug)
                setRelatedPosts(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchRelatedPosts()
    },[data])
    return(
        <>
            <Banner 
                imgSrc={getPostProfile(data)}
                title={data.attributes.postTitle}
                description={parser(data.attributes.postDescription)}
            />
            <main id="page-news-detail">
                <section id="news-detail-section1" >
                    <div className='container' id="post-content" style={{color : '#4d4d4d'}}>
                        {parser(data.attributes.postContent)}
                    </div>
                </section>
                <section id="news-detail-section2">
                    <h3 className="mb-4 text-center fw-bold" style={{color : '#4d4d4d'}}>TIN TỨC LIÊN QUAN</h3>
                    {
                        relatedPosts && 
                        <div className="container">
                           <div className="row g-4">
                                {
                                    relatedPosts.map((e,idx) => {
                                        return (
                                            <div className="col-12 col-md-6 col-xl-4 col-xxl-3" key={idx} >
                                                <Card>
                                                    <ImageCard src={getPostProfile(e)} AspectWrapper={aspect34Wrapper}/>
                                                    <CardContent className="px-0">
                                                        <CardCategory style={{color : '#4d4d4db2'}}>
                                                            {convertUTCPlus7(e.attributes.postDate)}
                                                        </CardCategory>
                                                        <CardTitle style={{color : '#4d4d4d'}} >
                                                            {e.attributes.postTitle}
                                                        </CardTitle>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                           </div>
                        </div>
                    }
                </section>
            </main>
        </>
    )
}