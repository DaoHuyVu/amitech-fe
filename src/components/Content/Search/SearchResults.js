import { searchPosts } from '../../../services/post'
import SearchItem from './SearchItem'
import Pagination from '../Pagination/Pagination'
import './searchResults.css'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const pageSize = 5
export default function SearchResults(){
    const [page,setPage] = useState(1)
    const [results,setResults] = useState(null)
    const location = useLocation()
    const ref = useRef(null)
    const {t} = useTranslation()
    useEffect(()=>{
        const fetchPageItems = async () => {
            try{
                const url = location.search
                const param = new URLSearchParams(url)
                const s = param.get('s')
                const res = await searchPosts(s,pageSize,page)
                setResults(res)
            }catch(err){
                console.log(err)
            }
        } 
        fetchPageItems()
        if(ref) ref.current.scrollIntoView({block : 'start',behaviour : 'smooth'})
    },[page,location])
    return (
        <main id='search-results' ref={ref}>
            <div className='container pb-4' style={{color : 'black'}}>
            <h2 className='pb-4 px-3' >{t('common.ket-qua-tim-kiem')}</h2>
                {
                    results && results.data.length > 0 ? 
                    results.data.map(e => {
                        return (
                            <SearchItem item={e} key={e.id} className='pb-3'/>
                        )
                    })
                    :
                    <h4 className='px-3'>{t('common.khong-tim-thay-ket-qua')}</h4>
                }
            </div>
            {
                results && 
                <Pagination 
                    pageInfo={{
                        pageCount : results.meta.pagination.pageCount,
                        page : page
                    }}
                    fetchPageItems = {page => setPage(page)}
                />
            }
        </main>
    )
}