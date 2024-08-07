import { searchPosts } from '../../../services/post'
import SearchItem from '../../search/SearchItem'
import './searchResults.css'
import { useLoaderData} from 'react-router-dom'
export const loader = async ({request}) => {
    const url = new URL(request.url)
    const s = url.searchParams.get('s')
    const results = await searchPosts(s)
    return {results}
}
export default function SearchResults(){
    const {results} = useLoaderData()
    return (
        <main id='search-results'>
            <div className='container-fluid' style={{color : 'black'}}>
            <h2 className='pb-4 px-3' >Kết quả tìm kiếm</h2>
                {
                    results.data.length > 0 ? 
                    results.data.map(e => {
                        return (
                            <SearchItem item={e} key={e.id} className='pb-3'/>
                        )
                    })
                    :
                    <h4 className='px-3'>Không tìm thấy bài viết</h4>
                }
            </div>
        </main>
    )
}