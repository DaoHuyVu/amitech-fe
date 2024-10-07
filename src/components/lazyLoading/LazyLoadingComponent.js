import { forwardRef, Suspense, useEffect } from "react"
import Loading from "../loading/Loading"
import './lazyloading.css'
export const LazyLoadingComponent = forwardRef(({children,isLoad,SetIsLoad,threshold = 0.1},ref) => {
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    if(entry.target === ref.current){
                        SetIsLoad(true)
                    }
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold : threshold
            }
        )
        if(ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    },[isLoad,SetIsLoad,ref,threshold]) 

    return(
        <div ref={ref} className={`lazy-loading-wrapper ${isLoad ? 'lazy-loading-wrapper--component-loaded' : ''}`}>
            {
                isLoad && 
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            }
        </div>    
    )
})