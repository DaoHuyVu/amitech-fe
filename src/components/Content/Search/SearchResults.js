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
            <div className='container-fluid'>
            <h2 className='pb-4 px-3' style={{color : 'black'}}>Kết quả tìm kiếm</h2>
                {
                    results.data.map(e => {
                        return (
                            <SearchItem item={e} key={e.id} className='pb-3'/>
                        )
                    })
                }
            </div>
        </main>
    )
}