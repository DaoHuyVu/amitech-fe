import Slider from "react-slick"
export default function Carousel({children,...delegated}){
    const commonSettings = {
        speed : 500,
        lazyLoad : true,
    }
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        ...commonSettings,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              infinite: true,
              slidesToScroll: 2,
              ...commonSettings,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,
              ...commonSettings,
            }
          },
        ]
      };
    return(
        <Slider {...settings} {...delegated} className="custom-carousel">
            {children}
        </Slider>
    )
}