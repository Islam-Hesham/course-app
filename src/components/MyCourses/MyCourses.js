import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCookies from '../../cookies';
import { toast } from "react-toastify";
function MyCourses() {
    const [courses, setCourses] = useState([]);
    const { cookies, setCookie, getCookie  } = useCookies();
    const [loading, setLoading  ] = useState(false);
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          setLoading(true)
          const response = await axios.get("http://localhost:5000/user-courses" , {
            headers: {
                Authorization: `Bearer ${getCookie("token")}`, // Add the token to the request header
              },
          });
          console.log(response);
          setCourses(response.data.data);
          setLoading(false)
        } catch (error) {
          setLoading(false)
          toast.error("حدثت مشكلة ")
          console.error("Error fetching courses:", error);
        }
      };
  
      fetchCourses();
    }, []);

  return (
<>
{loading && <div class="parent-loader">
        <span class="loader"></span>
    </div>
     }

<div>
      <div
        class="mycourse"
        style={{ marginTop: "106px" }}
        className="course-details py-5"
      >
        <div class="container-fluid">
          <h1 class="text-center mb-3">كورساتي</h1>
          <div class="hr-card"></div>
        </div>
      </div>

      <div class="py-5 w-100" id="courses"> 
  
    <div class="container pt-5">
        <div class="row g-4">
        {/* <a href="/#events">Contact</a> */}
        {courses?.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.id}>
              <div className="card courseCard border-0">
                <div className="img-card overflow-hidden overflow-hidden">
                  <img
                    className="card-img-top"
                    src={course?.img}
                    alt={course?.title}
                  />
                </div>{" "}
                <div className="card-body text-center">
                  <h5 className="card-title text-center">{course?.title}</h5>
                  <div className="hr-card"></div>{" "}
                  <p className="card-text mt-2">{course?.discreption}</p>{" "}
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">
                      <span className="d-inline-block ms-2">
                      {course?.sections?.length} 
                      وحدة 
                      </span>
                      <i className="fa-solid fa-layer-group"></i>{" "}
                    </p>
                 
                  </div>
                  <hr />
                  <div>
                    <Link
                      to={`/course/${course.id}`}
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



            {courses?.length == 0 && <h3 className="">انت لست مشترك فيه اي كورس حاليا </h3>}
        </div>


    </div>
    </div>
    </div>
</>

   
  
  );
}

export default MyCourses;
