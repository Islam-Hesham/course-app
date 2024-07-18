import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useCookies from '../../cookies';
function CourseHead({ course }) {
  const { cookies, setCookie, getCookie , removeCookie} = useCookies();
 
  return (
    <div className="head-color">
      <section className="course-details container py-5">
        <div className="row py-3">
          <div className="col-md-8 offset-md-4 ">
          <h2 className="py-2 w-100 ">{course?.title}</h2>
          <p className="w-100 text-muted">{course?.discreption}</p>
          </div>
         </div>
     
      
{/* <div className="container">
          <div className="row">
          <div className="headimg col-lg-5 me-lg-5 col-sm-12 ">
              <div className="card me-auto w-100 border-0 shadow-lg">
                <img src={course?.img} className="card-img-top w-100" height={250} alt="..." />
              </div>
            </div>
            <div className="head-item col-md-6 col-sm-12 text-start  text-black rounded-2">
              <h2 className="py-2">{course?.title}</h2>
              <p className="course-desc text-muted">{course?.discreption}</p>

              <div className="d-flex w-100 justify-content-between">
                <p>
                  {" "}
                  <i className="fa-solid fa-clock"></i>{" "}
                  <span className="d-inline-block mx-1">اخر تحديث:</span>{" "}
                  <span className=""> {course?.startDate.slice(0, 10)} </span>
                </p>
                <p>
                  {" "}
                  <i className="fas fa-user text-pink"></i>{" "}
                  <span className="d-inline-block mx-1">120</span> طالب مشترك
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-file"></i>{" "}
                  <span className="d-inline-block mx-1">
                    {course?.sections?.length}
                  </span>
                  وحدة{" "}
                </p>
              </div>

              <div className="mt-4 mb-2">
                <button onClick={handleEnroll} className="btn enroll">اشترك الان</button>
              </div>
            </div>
          
          </div>
</div> */}
    
      </section>

      
    </div>
  );
}

export default CourseHead;
