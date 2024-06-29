import React, { useEffect, useState } from "react";
import axios from "axios";
import './Data.css'
function Data() {
  const [data, setData] = useState(null);

  // const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/homeData");
        console.log(response);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className="contact py-5 " id="contact">
        <div className="container">
          <div className="contact-means row gap-3 gap-lg-0">
            <div className="col-lg-4">
             <div className="w-95 bg-BABYyellow m-auto d-flex gap-2 flex-column justify-content-center align-items-center rounded py-5">
             <i className="fas fa-user fs-2 text-pink"></i>
              <p className="text-dark fs-3 m-0">طالب</p>
              <h3 className="fw-semibold fs-3 m-0">{data?.Users < 60 ? "+60" :  "+" + data?.Users}</h3>
             </div>
             
            </div>
            <div className="col-lg-4">
             <div className="w-95 bg-BABYbluee m-auto d-flex gap-2 flex-column justify-content-center align-items-center rounded py-5">

              <i className="fa-solid fa-video fs-2"></i>
              <p className="text-dark fs-3 m-0">فيديو</p>
              {/* <h3 className="fw-semibold fs-3 m-0">+120</h3> */}
              <h3 className="fw-semibold fs-3 m-0">{data?.vedioes < 10 ? "+20" : "+" +  data?.vedioes}</h3>
</div>
            </div>
            <div className="col-lg-4">
             <div className="w-95 bg-BABYpink m-auto d-flex gap-2 flex-column justify-content-center align-items-center rounded py-5">

              <i className="fa-solid fa-file fs-2"></i>
              <p className="text-dark fs-2 m-0">كورس</p>
              <h3 className="fw-semibold fs-3 m-0">{data?.courses < 3 ? "+5" : "+" +  data?.courses}</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
