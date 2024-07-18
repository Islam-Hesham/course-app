

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./course.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';// import required modules
import { Navigation } from "swiper/modules";
function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const chunkedCourses = [];
  for (let i = 0; i < courses.length; i += 3) {
    chunkedCourses.push(courses.slice(i, i + 3));
  }
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/courses");
        console.log(response);
        setCourses(response.data.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading && (
        <div class="parent-loader">
          <span class="loader"></span>
        </div>
      )}

      <div className="py-5 w-100" id="courses">
        <h1 className="text-center">الصفوف الدراسية</h1>
        <div className="hr-card"></div>

        <div className="container px-3 pt-5 overflow-x-hidden Blog" id="blog">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={10}
            autoplay={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            // style={{height:"300px" , border: "1px solid "}}
          >
            {courses.map((course) => (
              <>
                <SwiperSlide key={course.id}>
                  <div className="card courseCard border-0 rounded">
                    <div className="img-card rounded p-2 overflow-hidden">
                      <img
                        className="card-img-top rounded"
                        // height={200}
                        src={course.img}
                        alt={course.title}
                      />
                    </div>
                    <div className="card-body rounded text-center">
                      <h5 className="card-title text-center">{course.title}</h5>
                      <div className="hr-card"></div>{" "}
                      <p className="card-text mt-3 text-muted">{course.discreption}</p>{" "}
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 fw-bold">
                        <i className="fa fa-solid fa-layer-group"></i>

                          <span className="d-inline-block ms-2">
                            {course.sections.length}
                          
                          </span>

                          <span>  وحدة</span>
                        </p>
                        <p className="mb-0">
                          <span className="d-inline-block ">
                          <i className=" fa fa-solid fa-wallet me-1"></i>

                            {/* <span>السعر بعد الخصم </span> */}

                            

                            {course.price * (1 - course.discount / 100) ===
                            0 ? (
                              <span className="name"> مجاني </span>
                            ) : (
                              <span className="name fw-bold">
                              
                                {course.price *
                                  (1 - course.discount / 100)} ج.م.
                              </span>
                            )}
                          </span>
                        </p>
                      </div>
                      <hr />
                      <div>
                        <Link
                          to={`course/${course.id}`}
                          className="btn card-btn btn-sm  px-5"
                          role="button"
                        >
                          الدخول للكورس
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Courses;
