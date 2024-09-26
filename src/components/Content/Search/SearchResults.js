import { searchPosts } from '../../../services/post'
import SearchItem from './SearchItem'
import Pagination from '../Pagination/Pagination'
import './searchResults.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const pageSize = 5
export default function SearchResults(){
    const [page,setPage] = useState(1)
    const [results,setResults] = useState(null)
    const location = useLocation()
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
    },[page])
    return (
        <main id='search-results'>
            <div className='container pb-4' style={{color : 'black'}}>
            <h2 className='pb-4 px-3' >Kết quả tìm kiếm</h2>
                {
                    results && results.data.length > 0 ? 
                    results.data.map(e => {
                        return (
                            <SearchItem item={e} key={e.id} className='pb-3'/>
                        )
                    })
                    :
                    <h4 className='px-3'>Không tìm thấy kết quả phù hợp</h4>
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