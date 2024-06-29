// // export default Courses
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./course.css";

// function Courses() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-5 w-100" id="courses">
//       <h1 className="text-center">الصفوف الدراسية</h1>
//       <div className="hr-card"></div>

//       <div className="container px-3 pt-5">
//         <Slider {...settings}>
//           <div className="col-lg-4 col-md-6">
//             <div className="card courseCard border-0">
//               <div className="img-card overflow-hidden overflow-hidden">
//                 <img
//                   className="card-img-top"
//                   src="./imgs/card.jpeg"
//                   alt="Card image cap"
//                 />
//               </div>{" "}
//               <div className="card-body text-center">
//                 <h5 className="card-title text-center">
//                   منهج الكيمياء أولى ثانوي ترم الاول
//                 </h5>
//                 <div className="hr-card"></div>{" "}
//                 <p className="card-text mt-2">
//                   الحرارية الكيمياء اسئلة خاصة بالباب الثاني وواجب بعد كل محاضرة
//                 </p>{" "}
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="mb-0">
//                     <i className="fa-solid fa-layer-group"></i>{" "}
//                     <span className="d-inline-block ms-2">30 وحدة</span>
//                   </p>
//                   <p className="mb-0">
//                     <i className="fa-solid fa-wallet"></i>
//                     <span className="d-inline-block ms-2">100 ج</span>
//                   </p>
//                 </div>
//                 <hr />
//                 <div>
//                   <a
//                     href="vidioes/index-vidio.html"
//                     className="btn card-btn "
//                     role="button"
//                   >
//                     {" "}
//                     الدخول للكورس
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6">
//             <div className="card courseCard border-0">
//               <div className="img-card overflow-hidden overflow-hidden">
//                 <img
//                   className="card-img-top"
//                   src="./imgs/card.jpeg"
//                   alt="Card image cap"
//                 />
//               </div>
//               <div className="card-body text-center">
//                 <h5 className="card-title text-center">
//                   منهج الكيمياء أولى ثانوي ترم الاول
//                 </h5>
//                 <div className="hr-card"></div>
//                 <p className="card-text mt-2">
//                   الحرارية الكيمياء اسئلة خاصة بالباب الثاني وواجب بعد كل محاضرة
//                 </p>
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="mb-0">
//                     <i className="fa-solid fa-layer-group"></i>{" "}
//                     <span className="d-inline-block ms-2">30 وحدة</span>
//                   </p>
//                   <p className="mb-0">
//                     <i className="fa-solid fa-wallet"></i>
//                     <span className="d-inline-block ms-2">100 ج</span>
//                   </p>
//                 </div>
//                 <hr />
//                 <div>
//                   <a
//                     href="vidioes/index-vidio.html"
//                     className="btn card-btn "
//                     role="button"
//                   >
//                     {" "}
//                     الدخول للكورس
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6 ms-2">
//             <div className="card courseCard border-0">
//               <div className="img-card overflow-hidden overflow-hidden">
//                 <img
//                   className="card-img-top"
//                   src="./imgs/card.jpeg"
//                   alt="Card image cap"
//                 />
//               </div>{" "}
//               <div className="card-body text-center">
//                 <h5 className="card-title text-center">
//                   منهج الكيمياء أولى ثانوي ترم الاول
//                 </h5>
//                 <div className="hr-card"></div>{" "}
//                 <p className="card-text mt-2">
//                   الحرارية الكيمياء اسئلة خاصة بالباب الثاني وواجب بعد كل محاضرة
//                 </p>{" "}
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="mb-0">
//                     <i className="fa-solid fa-layer-group"></i>{" "}
//                     <span className="d-inline-block ms-2">30 وحدة</span>
//                   </p>
//                   <p className="mb-0">
//                     <i className="fa-solid fa-wallet"></i>
//                     <span className="d-inline-block ms-2">100 ج</span>
//                   </p>
//                 </div>
//                 <hr />
//                 <div>
//                   <a
//                     href="vidioes/index-vidio.html"
//                     className="btn card-btn "
//                     role="button"
//                   >
//                     {" "}
//                     الدخول للكورس
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Add more course cards here */}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./course.css";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:5000/courses");
        console.log(response);
        setCourses(response.data.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
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

{loading && <div class="parent-loader">
        <span class="loader"></span>
    </div>
     }


    <div className="py-5 w-100" id="courses">

 

<h1 className="text-center">الصفوف الدراسية</h1>
<div className="hr-card"></div>

<div className="container px-3 pt-5 Blog" id="blog">
  <Slider {...settings}>
    {courses.map((course) => (
      <div className="col-lg-4 col-md-6" key={course.id}>
        <div className="card courseCard border-0">
          <div className="img-card overflow-hidden overflow-hidden">
            <img
              className="card-img-top"
              height={200}
              src={course.img}
              alt={course.title}
            />
          </div>{" "}
          <div className="card-body text-center">
            <h5 className="card-title text-center">{course.title}</h5>
            <div className="hr-card"></div>{" "}
            <p className="card-text mt-2">{course.discreption}</p>{" "}
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">
                <span className="d-inline-block ms-2">
                {course.sections.length} 
                وحدة 
                </span>
                <i className="fa-solid fa-layer-group"></i>{" "}
              </p>
              <p className="mb-0">
                <span className="d-inline-block ms-2">
                  <span>السعر بعد الخصم  </span>
                     
                  {Number(course.price) - ((Number(course.discount) / 100) * Number(course.price)) == 0 ? <span className="name" >  مجاني  </span>  :
                   <span className="name"> { Number(course.price) - ((Number(course.discount) / 100) * Number(course.price))} </span>
                  }
                   
                </span>
                <i className="fa-solid fa-wallet"></i>
              </p>
            </div>
            <hr />
            <div>
              <Link
                to={`course/${course.id}`}
                className="btn card-btn "
                role="button"
              >
                الدخول للكورس
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
</div>

</>

 
  );
}

export default Courses;
