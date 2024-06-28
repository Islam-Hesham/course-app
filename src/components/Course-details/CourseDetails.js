import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useCookies from '../../cookies';
import "./CourseDetails.css";

import CourseHead from "./CourseHead";
import { toast } from "react-toastify";
function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [video, setVideo] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
const { cookies, setCookie, getCookie } = useCookies();

  // const [path , setPath] = useState("")

  async function handleShow(breakpoint, id) {
    axios
      .get(`https://lms.gamal-abdelnasser.com/vedioes/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      .then((response) => {
        setVideo(response.data.data);
        setFullscreen(breakpoint);
        setShow(true);
      })
      .catch((err) => {
        if (err.response.data.status_code == 401) {
          toast.error("يجب عليك الاشتراك اولا ");
        } else {
          toast.error("حدثت مشكلة حاول  مرة اخري");
        }
      });
  }

  useEffect(() => {
    setLoading(true)
    // Fetch course data based on the id
    axios
      .get(`https://lms.gamal-abdelnasser.com/courses/${id}`)
      .then((response) => {
        setCourseData(response.data.data);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error("حدثت مشكلة حاول  مرة اخري");
      });
  }, [id]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log(courseData?.sections);
  return (

<>
{loading && <div class="parent-loader">
        <span class="loader"></span>
    </div>
     }

<div>
      <CourseHead course={courseData} />

      <div>
        <div className="accordion-body py-5">
          <h1 className="text-center mb-3">
            محتوي <span>الكورس</span>
          </h1>
          <div className="hr-card"></div>

          <div className="accordion w-100">
            {courseData?.sections?.map((section, index) => (
              <div
                className={`container ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
                key={index}
              >
                <div className="label">{section.title}</div>
                <div className="content w-100">
                  <ul className="list-unstyled">
                    {!section?.vedioes && (
                      <li className="py-3">
                        <p className="unite-num d-inline text-muted">
                          سيتم رفع فيديوهات قريبا ...{" "}
                        </p>
                      </li>
                    )}
                    {section?.vedioes?.map((lesson, lessonIndex) => (
                      <li
                        className="py-3 d-flex justify-content-between align-items-center"
                        key={lessonIndex}
                      >
                        <p className="unite-num ps-3 mb-0 d-inline text-muted">
                          {" "}
                          <i className="fas fa-video me-2"></i>
                          {lesson.title}
                        </p>
                        <Button
                          key={index}
                          className="me-2 mb-2 btn-sm rounded-0 btn-warning"
                          onClick={() => handleShow("xxl-down", lesson.id)}
                        >
                          مشاهدة الفيديو
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

{courseData?.sections?.length == 0 && <h3 className="text-center text-muted">سيتم رفع الوحدات قريبا ...</h3>}
          </div>
        </div>
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
            <video controls className="w-100 h-100" controlsList="nodownload">
            <source src={video?.path} type="video/mp4" />
            <source src={video?.path} type="video/ogg" />
            <source src={video?.path} type="video/webm" />
            {/* Your browser does not support the video tag. */}
          </video>
        </Modal.Body>
      </Modal>
    </div>
</>

    
  );
}

export default CourseDetails;
