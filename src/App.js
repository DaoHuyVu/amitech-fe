// import './App.css';
// import Home from './pages/home/Home'
// import Products from "./pages/product/Products";
// import News from "./pages/news/News";
// import Quote from "./pages/quote/Quote";
// import Contact from "./pages/contact/Contact";
// import Solution from "./pages/solution/Solution";
// import Recruitment from "./pages/recruitment/Recruitment";
// import Introduction from "./pages/Introduction/Introduction";
// import Project from "./pages/project/Project";
// import JobDetails from "./pages/recruitment/JobDetails";
// import NewsDetail from "./pages/news/NewsDetail";
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
import BaseContainer from "./components/Content/BaseContainer";
import {loader as ProductDetailLoader } from "./components/Content/ProductsContent/ProductDetailContent"
const EnergyManagement = lazy(() => import("./components/Content/Solution/energyManagement/EnergyManagement"))
const BaseSolution = lazy(() => import("./components/Content/Solution/BaseSolution"));
const HomeContent =  lazy(() => import("./components/Content/Home/HomeContent"));
const Recruitment = lazy(() =>import("./components/Content/Recruitment/RecruitmentContent"));
const DefaultLayout  = lazy(() => import("./layout/DefaultLayout"))
const Introduction  = lazy(() => import("./components/Content/Introduction/IntroductionContent"))
const Project  = lazy(() => import("./components/Content/Project/ProjectContent"))
const Solution  = lazy(() => import("./components/Content/Solution/SolutionContent"))
const Products  = lazy(() => import("./components/Content/ProductsContent/ProductsContent"))
const News  = lazy(() => import("./components/Content/NewsContent/NewsContent2"))
const Quote  = lazy(() => import("./components/Content/QuoteContent/QuoteContent"))
const Contact = lazy(() => import("./components/Content/ContactContent/ContactContent"))
const Activities = lazy(() => import("./components/Content/Activities/ActivitiesContent"))
const ProjectDetailContent = lazy(() => import("./components/Content/Project/ProjectDetailContent"))
const ProductDetailContent =lazy(()=> import("./components/Content/ProductsContent/ProductDetailContent"))
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
        path : 'gioi-thieu',
        element : <Introduction />,
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
        path : 'tin-tuc',
        element : <News />
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
        element : <Recruitment />
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
