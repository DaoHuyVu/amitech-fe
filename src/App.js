import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {lazy,Suspense}from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ErrorPage } from "./components/error/ErrorPage";
import { projectLoader } from "./components/Content/Project/ProjectDetailContent";
import NewsDetail, {loader as NewsLoader} from './components/Content/News/NewsDetail'
import BaseContainer from "./components/Content/BaseContainer";
import {loader as ProductDetailLoader } from "./components/Content/ProductsContent/ProductDetailContent"
import {loader as JobDetailLoader} from './components/Content/Recruitment/RecruitmentDetail'
const EnergyManagement = lazy(() => import("./components/Content/Solution/energyManagement/EnergyManagement"))
const BaseSolution = lazy(() => import("./components/Content/Solution/BaseSolution"));
const HomeContent =  lazy(() => import("./components/Content/Home/HomeContent"));
const Recruitment = lazy(() =>import("./components/Content/Recruitment/Recruitment"));
const DefaultLayout  = lazy(() => import("./layout/DefaultLayout"))
const Introduction  = lazy(() => import("./components/Content/Introduction/IntroductionContent"))
const Project  = lazy(() => import("./components/Content/Project/ProjectContent"))
const Solution  = lazy(() => import("./components/Content/Solution/SolutionContent"))
const Products  = lazy(() => import("./components/Content/ProductsContent/ProductsContent"))
const Quote  = lazy(() => import("./components/Content/QuoteContent/QuoteContent"))
const News = lazy(()=>import("./components/Content/News/News"))
const Contact = lazy(() => import("./components/Content/ContactContent/ContactContent"))
const Activities = lazy(() => import("./components/Content/Activities/ActivitiesContent"))
const ProjectDetailContent = lazy(() => import("./components/Content/Project/ProjectDetailContent"))
const ProductDetailContent =lazy(()=> import("./components/Content/ProductsContent/ProductDetailContent"))
const SearchResult  = lazy(() => import('./components/Content/Search/SearchResults'))
const RecruitmentDetail = lazy(() => import('./components/Content/Recruitment/RecruitmentDetail'))
const router = createBrowserRouter([
  {
    path : '/',
    element : <DefaultLayout />,
    errorElement : <ErrorPage />,
    children : [
      {
        index : true,
        element : <HomeContent />
      },
      {
        path : 'tim-kiem',
        element : <SearchResult />,
      },
      {
        path : 'gioi-thieu',
        element : <BaseContainer />,
        children : [
            {
              index : true,
              element : <Introduction />
            },
            {
              path : 'hinh-anh-hoat-dong',
              element : <Activities />
            }
        ]
      },
      {
        path : 'du-an-tieu-bieu',
        element : <BaseContainer/>,
        children : [
          {
            index : true,
            element : <Project />
          },
          {
            path : ':slug',
            element : <ProjectDetailContent />,
            loader : projectLoader
          }
        ]
      },
      {
        path : 'giai-phap-chuyen-doi-so',
        element : <BaseSolution />,
        children : [
          {
            index : true,
            element : <Solution />
          },
          {
            path : 'quan-ly-nang-luong',
            element : <EnergyManagement />
          }
        ]
      },
      {
        path : 'thiet-bi-va-san-pham-cong-nghiep',
        element : <BaseContainer/>,
        children : [
          {
            index : true,
            element : <Products />
          },
          {
            path : ':slug',
            element : <ProductDetailContent />,
            loader : ProductDetailLoader
          }
        ]
      },
      {
        path : 'tin-tuc-va-su-kien',
        element : <BaseContainer />,
        children : [
          {
            index : true,
            element : <News />
          },
          {
            path : ':slug',
            element : <NewsDetail />,
            loader : NewsLoader
          }
        ]
      },
      {
        path : 'bao-gia',
        element : <Quote />
      },
      {
        path : 'lien-he',
        element : <Contact />
      },
      {
        path : 'tuyen-dung',
        element : <BaseContainer/>,
        children : [
          {
            index : true,
            element : <Recruitment />
          },
          {
            path : ':slug',
            element : <RecruitmentDetail />,
            loader : JobDetailLoader
          }
        ] 
      },
      
    ] 
  }, 
])
function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Suspense>
  );
}

export default App;
