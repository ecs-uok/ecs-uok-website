import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import useFetch from "../hooks/useFetch";
import Error from "./animations/Error";
import Loading from "./animations/Loading";

export default function CarouselSlider() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts/?populate=*"
  );

  const cachedData = !loading && !error && data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="my-8 mx-8 md:mx-16">
          <Slider {...settings}>
            {cachedData &&
              cachedData.data
                .slice() // create a shallow copy to avoid mutating original data
                .sort(
                  (a, b) =>
                    new Date(b.attributes.blogDate) -
                    new Date(a.attributes.blogDate)
                )
                .map((blog) => {
                  return (
                    <CarouselCard
                      key={blog.id}
                      blogImage={blog.attributes.coverImage.data.attributes.url}
                      blogTitle={blog.attributes.blogTitle}
                      blogDate={blog.attributes.blogDate}
                      blogUrl={blog.attributes.blogUrl}
                    />
                  );
                })}
          </Slider>
        </div>
      )}
    </>
  );
}
