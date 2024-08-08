import { searchPosts } from '../../../services/post'
import SearchItem from './SearchItem'
import Pagination from '../Pagination/Pagination'
import './searchResults.css'
import { useLoaderData} from 'react-router-dom'
const pageSize = 5
export const loader = async ({request,params}) => {
    const url = new URL(request.url)
    const s = url.searchParams.get('s')
    const results = await searchPosts(s,pageSize,params.pageNum)
    return {results}
}
export default function SearchResults(){
    const {results} = useLoaderData()
    return (
        <main id='search-results'>
            <div className='container-fluid pb-4' style={{color : 'black'}}>
            <h2 className='pb-4 px-3' >Kết quả tìm kiếm</h2>
                {
                    results.data.length > 0 ? 
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
                results.data.length > 0 && 
                <Pagination 
                    pageInfo={{
                        page : results.meta.pagination.page,
                        pageCount : results.meta.pagination.pageCount
                    }}
                />
            }
        </main>
    )
}