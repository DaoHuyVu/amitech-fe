import DigitalTransformation from "./DigitalTransformation";
import Introduction from './Introduction'
import { LazyLoadingComponent } from "../../lazyLoading/LazyLoadingComponent";
import './home.css'
import { lazy, useRef, useState } from "react";
const Products = lazy(() => import('./Products'))
const News = lazy(() => import('./News'))
const Customer = lazy(() => import('./Customer'))
const Project = lazy(() => import('./Project'))
const Solution = lazy(() => import('./Solution'))
export default function HomeContent(){
    const productRef = useRef(null)
    const solutionRef = useRef(null)
    const customerRef = useRef(null)
    const projectRef = useRef(null)
    const newsRef = useRef(null)

    const [isLoadProduct,setIsLoadProduct] = useState(false)
    const [isLoadSolution,setIsLoadSolution] = useState(false)
    const [isLoadCustomer,setIsLoadCustomer] = useState(false)
    const [isLoadProject,setIsLoadProject] = useState(false)
    const [isLoadNews,setIsLoadNews] = useState(false)
    return(
        <main id="home">
            <DigitalTransformation />
            <Introduction />
            <LazyLoadingComponent ref={solutionRef} isLoad={isLoadSolution} SetIsLoad={setIsLoadSolution}>
                <Solution />
            </LazyLoadingComponent>
            <LazyLoadingComponent ref={productRef} isLoad={isLoadProduct} SetIsLoad={setIsLoadProduct}>
                <Products />
            </LazyLoadingComponent>
            <LazyLoadingComponent ref={projectRef} isLoad={isLoadProject} SetIsLoad={setIsLoadProject}>
                <Project />
            </LazyLoadingComponent>
            <LazyLoadingComponent ref={newsRef} isLoad={isLoadNews} SetIsLoad={setIsLoadNews}>
                <News/>
            </LazyLoadingComponent>
            <LazyLoadingComponent ref={customerRef} isLoad={isLoadCustomer} SetIsLoad={setIsLoadCustomer}>
                <Customer />
            </LazyLoadingComponent>
        </main>
    )
}