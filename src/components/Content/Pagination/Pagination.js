import PageItem from './PageItem'
import './pagination.css'

const totalPagesCenter = 5
export default function Pagination({className='',style,pageInfo,fetchPageItems=() =>{}}){
    const {page,pageCount} = pageInfo
    const handleClick = (page) => {
        fetchPageItems(page)
    }
    let pages = []
    let start = Math.max(1,page-Math.floor(totalPagesCenter/2))
    let end = Math.min(page+Math.floor(totalPagesCenter/2),pageCount)
    for(let i = start; i<=end ; ++i){
        if(i >= 1 && i <= pageCount){ 
            pages.push(
                <PageItem onClick={() => handleClick(i)} page={i} key={`${i}`} type={`${i === page ? 'selected' : 'page'}`}/>
            )        
        }
    }
    return(
        <div id='pagination' className={`${className} text-center `} style={style} >
            {page > 1 && <PageItem onClick={() => handleClick(page-1)} page={page-1} type='prev'/> } 
            {
                page-1-Math.floor(totalPagesCenter/2)>=1 && 
                <PageItem onClick={() => handleClick(1)} page={1} type='page'/> 
            }
            {
                page-1-Math.floor(totalPagesCenter/2)>1 && 
                <PageItem type='dull' />
            }
            {pages}
            {
                page+1+Math.floor(totalPagesCenter/2)<pageCount && 
                <PageItem type='dull'/>         
            }
            {
                page+1+Math.floor(totalPagesCenter/2)<=pageCount && 
                    <PageItem onClick={() => handleClick(pageCount)} page={pageCount} type='page'/>
            }
            {page < pageCount && <PageItem onClick={() => handleClick(page+1)} page={page+1} type='next'/>}
        </div>
    )
}