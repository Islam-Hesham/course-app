import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useCookies from "../../cookies";
import "./CourseDetails.css";
import { VideoPlayer } from "6pp";
import Accordion from "react-bootstrap/Accordion";
import CourseHead from "./CourseHead";
import { toast } from "react-toastify";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { Video } from "reactjs-media";

import Swal from "sweetalert2";
function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [video, setVideo] = useState(null);
  const [quiz, setQuiz] = useState(null);
  // const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { getCookie, removeCookie } = useCookies();
  const [auth, setAuth] = useState(false);
  const [quality, setQuality] = useState(480);
  const { cookies, setCookie, getCookie } = useCookies();
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  // const [videoPath, setVideoPath] = useState(null);

  const youtubeEmbedRegex =
    /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+(\?.*)?$/;
  // const [path , setPath] = useState("")
  const handleAnswerSelect = (questionId, choiceId) => {
    const newAnswers = [...answers];
    const existingAnswer = newAnswers.find(
      (answer) => answer.questionId === questionId
    );

    if (existingAnswer) {
      existingAnswer.choiceId = choiceId;
    } else {
      newAnswers.push({ questionId, choiceId });
    }

    setAnswers(newAnswers);
  };

  const scrollToPlayer = () => {
    const player = document.getElementById("player");
    if (player) {
      player.scrollIntoView({ behavior: "smooth" ,block: "start" });
      // window.scrollY = 60
    }
  };

  const handleSubmitQuiz = (id) => {
    axios
      .post(
        `http://localhost:5000/quizzes/${id}/submit`,
        { answers },
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        setScore(response.data.data.score);
        setSubmitted(true);
        resetQuiz();
        toast.success("تم ارسال اجاباتك");
      })
      .catch((error) => {
        resetQuiz();
        console.error("Error submitting quiz:", error);
      });
  };
  async function handleShow(id) {
    setVideo(null)
     axios
      .get(`http://localhost:5000/vedioes/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      .then((response) => {
        setVideo(response.data.data);
        scrollToPlayer();
        // console.log(youtubeEmbedRegex.test(response.data.data));

        // setFullscreen(breakpoint);
        // setShow(true);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.data.status_code);
        if (err.response.data.status_code == 401) {
          toast.error("يجب عليك الاشتراك اولا ");
        } else if (err.response.data.status_code === 403) {
          toast.error(err.response.data.message);
        } else {
          toast.error("حدثت مشكلة حاول  مرة اخري");
        }
      });
  }

  async function handleShowQuiz(id) {
    axios
      .get(`http://localhost:5000/quizzes/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      .then((response) => {
        setQuiz(response.data.data);
        // console.log(youtubeEmbedRegex.test(response.data.data));
        // setIsQuiz(true);

        // setFullscreen(breakpoint);
        setIsQuiz(true);
      })
      .catch((err) => {
        console.log(err.response.data.status_code);
        if (err.response.data.status_code === 401) {
          toast.error("يجب عليك الاشتراك اولا ");
        } else {
          toast.error("حدثت مشكلة حاول  مرة اخري");
        }
      });
  }

  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    const formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");

    return formattedTime;
  }

  function calculateTotalCourseDuration(course) {
    let totalDuration = 0;

    // Iterate through each section
    course?.sections?.forEach((section) => {
      // Iterate through each video in the section
      section?.vedioes?.forEach((vedio) => {
        // Add the duration of the video to totalDuration
        totalDuration += vedio.duration;
      });
    });

    // Return the total duration in seconds
    return formatDuration(totalDuration);
  }

  function calculateTotalSectionDuration(section) {
    let totalDuration = 0;

    section?.vedioes?.forEach((vedio) => {
      // Add the duration of the video to totalDuration
      totalDuration += vedio.duration;
    });

    // Return the total duration in seconds
    return formatDuration(totalDuration);
  }

  function calculateTotalCourseVideos(sections) {
    let totalVideos = 0;

    // Iterate through each section
    sections?.forEach((section) => {
      // Add the number of videos in the section to the totalVideos
      totalVideos += section?.vedioes?.length;
    });

    return totalVideos;
  }

  // function calculateCourseAndSectionDurations(course) {
  //   let totalCourseDuration = 0;
  //   const sectionDurations = {};

  //   // Iterate through each section
  //   course.sections?.forEach(section => {
  //     let sectionDuration = 0;

  //     // Iterate through each video in the section
  //     section.vedioes.forEach(vedio => {
  //       // Add the duration of the video to sectionDuration and totalCourseDuration
  //       sectionDuration += vedio.duration;
  //       totalCourseDuration += vedio.duration;
  //     });

  //     // Store section duration in sectionDurations object
  //     sectionDurations[section.title] = sectionDuration;
  //   });

  //   // Return an object with total course duration and section durations
  //   return {
  //     totalCourseDuration: formatDuration(totalCourseDuration),
  //     sectionDurations
  //   };
  // }
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < quiz?.Questions?.length ? prevStep + 1 : prevStep
    );
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  console.log("statte" , video);

  // Reset the quiz and modal data
  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers([]);
    setIsQuiz(false);
  };
  useEffect(() => {
    const token = getCookie("token");

    if (token && token !== "undefined") {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(true);
    // Fetch course data based on the id
    axios
      .get(`http://localhost:5000/courses/${id}`)
      .then((response) => {
        setCourseData(response.data.data);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("حدثت مشكلة حاول  مرة اخري");
      });
  }, [id]);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleEnroll = async () => {
    axios
      .post(`http://localhost:5000/courses/enroll/${courseData?.id}`, null, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`, // Add the token to the request header
        },
      })
      .then((response) => {
        Swal.fire({
          title: " تم تسجيل طلبك بنجاح ",
          text: `  قم بارسال ايصال دفع اورنج كاش مع الايميل الخاص بك علي رقمنا علي الواتساب و سيتم تفعيل الكورس  
        `,
          icon: "success",
          className: "join",

          confirmButtonText: "حسنا",

          timer: 15000000000000,
          showCloseButton: true,
        });
        // setSections(response.data.data); // Set the fetched courses to the state
      })
      .catch((err) => {
        if (err.response.data.status_code == 401) {
          toast.error("يجب عليك تسجيل الدخول اولا ");
        } else {
          toast.error("حدثت مشكلة حاول  مرة اخري");
        }
      });
  };
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  console.log(courseData?.sections);
  console.log(
    courseData?.sections[0]?.vedioes[0]?.Quizzes[0]?.Questions.length
  );
  return (
    <>
      {loading && (
        <div class="parent-loader">
          <span class="loader"></span>
        </div>
      )}

      <div className="mb-4 h-100">
        <CourseHead course={courseData} />

        <div className="container min-400px py-4">
          {/* <h3 className="text-center ">
              محتوي <span>الكورس</span>
            </h3>
             <div className="hr-card"></div> */}

          <div className="row mt-3">
            <div className="col-md-3 col-12 info-card  ">
              <div className="w-100 m-auto light rounded p-3">
                <img
                  src={courseData?.img}
                  className="card-img-top rounded w-100"
                  alt="..."
                />
                <ul className="list-unstyled py-3  m-0">
                  <li className="py-2 border-bottom  mb-2">
                    <p className="m-0 d-flex w-100 justify-content-between align-items-center px-2">
                      <span className="mx-1 d-block fw-bold">
                        {" "}
                        <i class="fa fa-regular fa-money-bill-1 me-2"></i> السعر{" "}
                      </span>{" "}
                      <span className="d-block">
                        {" "}
                        <span className="strikethrough text-sm text-muted">
                          {courseData?.price}
                        </span>{" "}
                        / {courseData?.price * (1 - courseData?.discount / 100)}{" "}
                      </span>
                    </p>
                  </li>
                  <li className="py-2 border-bottom  mb-2">
                    <p className="m-0 d-flex w-100 justify-content-between align-items-center px-2">
                      <span className="mx-1 d-block fw-bold">
                        {" "}
                        <i class="fa fa-solid fa-clock-rotate-left me-2"></i>{" "}
                        عدد الساعات{" "}
                      </span>{" "}
                      <span className="">
                        {" "}
                        {calculateTotalCourseDuration(courseData)}
                      </span>
                    </p>
                  </li>

                  <li className="py-2 border-bottom  mb-2">
                    <p className="m-0 d-flex w-100 justify-content-between align-items-center  px-2">
                      <span className="mx-1 d-block fw-bold">
                        {" "}
                        <i class="fa fa-regular fa-file-lines me-2"></i> عدد
                        الدروس
                      </span>{" "}
                      <span className="">
                        {" "}
                        {calculateTotalCourseVideos(courseData?.sections)}{" "}
                      </span>
                    </p>
                  </li>

                  <li className="py-2 border-bottom  mb-2">
                    <p className="m-0 d-flex w-100 justify-content-between align-items-center px-2">
                      <span className="mx-1 d-block fw-bold">
                        {" "}
                        <i class="fa fa-regular fa-user me-2"></i> مشترك
                      </span>{" "}
                      <span className=""> {courseData?.totalEnrollments} </span>
                    </p>
                  </li>
                  <li className="py-2 border-bottom  mb-2">
                    <p className="m-0 d-flex w-100 justify-content-between align-items-center px-2">
                      <span className="mx-1 d-block fw-bold">
                        {" "}
                        <i class="fa fa-regular fa-pen-to-square me-2"></i> اخر
                        تحديث
                      </span>{" "}
                      <span className="">
                        {" "}
                        {courseData?.startDate.slice(0, 10)}
                      </span>
                    </p>
                  </li>
                </ul>
                <button
                  className="btn enroll w-75 d-block  m-auto"
                  onClick={handleEnroll}
                >
                  اشترك الان
                </button>
              </div>
            </div>
            <div className="col-md-8 offset-md-4 col-12 ">
              {video && (
                <div id="player" className="rounded mb-2 position-relative">
                  <div className="bg-light px-4 py-2 border rounded mb-2">
                  {video?.title}
              {video?.Quizzes?.length !== 0 ? (
                <span
                  onClick={() => handleShowQuiz(video?.Quizzes[0]?.id)}
                  className=" ms-2 question cursor badge-span "
                >
                  ادخل الاختبار
                </span>
              ) : (
                ""
              )}
                  </div>
                  <video
                    controls
                    className="w-100 h-100 rounded"
                    controlsList="nodownload"
                  >
                    <source src={video?.path} type="video/mp4" />
                    <source src={video?.path} type="video/ogg" />
                    <source src={video?.path} type="video/webm" />
                  </video>
                  {/* Your browser does not support the video tag. */}

                  {/* <VideoPlayer
                  src={video?.path}
                  setQuality={setQuality}
                ></VideoPlayer> */}

                  {/* <Video
controls
src={video?.path}
autoPlay={true}
// poster={courseData?.img}
height={400}
width={800}
className="w-100"

/> */}
                </div>
              )}

              <Accordion
                defaultActiveKey={[0]}
                className=" m-0 p-0 border-0"
                alwaysOpen
              >
                {courseData?.sections?.map((section, index) => (
                  <>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header
                        className="fw-bold d-flex align-items-center"
                        style={{ boxShadow: "none" }}
                      >
                        {" "}
                        <span className="badge-span duration me-2">
                          {" "}
                          {calculateTotalSectionDuration(section)}
                        </span>{" "}
                        <span className="">{section.title}</span>{" "}
                      </Accordion.Header>
                      <Accordion.Body className="p-0">
                        <ul className="list-unstyled m-0">
                          {section?.vedioes.length === 0 && (
                            <li className="py-3">
                              <p className="unite-num d-inline text-muted px-2">
                                سيتم رفع فيديوهات قريبا ...{" "}
                              </p>
                            </li>
                          )}
                          {section?.vedioes?.map((lesson, lessonIndex) => (
                            <li
                              className="py-3 px-3 d-flex justify-content-between lesson-row align-items-center"
                              key={lessonIndex}
                            >
                              <p className="unite-num mb-0 d-inline text-muted">
                                <i className="fas fa-play me-2 rotate-left"></i>
                                {lesson.title}
                              </p>
                              <div>
                                <span className=" duration  badge-span ms-2">
                                  {formatDuration(lesson.duration)}
                                </span>
                                {lesson?.Quizzes?.length !== 0 ? (
                                  <span className=" ms-2 question cursor badge-span ">
                                    {lesson.Quizzes[0]?.Questions.length} اسئلة{" "}
                                  </span>
                                ) : (
                                  ""
                                )}

                                {auth ? (
                                  <span
                                    key={index}
                                    onClick={() => handleShow(lesson.id)}
                                    className="cursor ms-2 badge-span preview"
                                  >
                                    مشاهدة
                                  </span>
                                ) : (
                                  <i class="fa fa-solid fa-lock text-muted ms-2"></i>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                ))}
              </Accordion>
              {courseData?.sections?.length == 0 && (
                <h3 className="text-center text-muted">
                  سيتم رفع الوحدات قريبا ...
                </h3>
              )}
            </div>
          </div>
        </div>
        {/* <Modal
          show={show}
          centered
          onHide={() => setShow(false)}
          dialogClassName=""
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
            
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Video
                controls
                src={video?.path}
                // poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW58ZW58MHx8MHx8fDA%3D"
                height={800}
                width={800}
              />
              {/* {youtubeEmbedRegex.test(video?.path) ? (
                // Render iframe for YouTube embed URL
                <iframe
                  className="w-100 h-100"
                  src={video?.path}
                  title={video?.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              ) : (
                <VideoPlayer
                  src={video?.path}
                  setQuality={setQuality}
                ></VideoPlayer>
                // Render video tag for local or other video URLs
                // <video controls className="w-100 h-100" controlsList="nodownload">
                // <source src={video?.path} type="video/mp4" />
                // <source src={video?.path} type="video/ogg" />
                // <source src={video?.path} type="video/webm" />
                //   </video>
              )} */}
            {/* </> */}

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AIA-3OkWjAs?si=B6JdYKLolONmyRYN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            {/* {" "}
            <video controls className="w-100 h-100" controlsList="nodownload">
            <source src={video?.path} type="video/mp4" />
            <source src={video?.path} type="video/ogg" />
            <source src={video?.path} type="video/webm" /> */}
            {/* Your browser does not support the video tag. */}
          {/* </Modal.Body> */}
        {/* </Modal> */} 

        <Modal dialogClassName="quizmodal-600px"  backdrop="static"
          keyboard={false} show={isQuiz} onHide={() => setIsQuiz(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{quiz?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <div className="quiz-container">
             
                <div className="quiz-content">
                  {quiz?.Questions?.map((question, index) => (

                    <div
                      key={question.id}
                      className={`quiz-step ${
                        currentStep === index + 1 ? "active" : ""
                      }`}
                    >

<div className="stepper">
                 
                    <div
                      key={index}
                      className={`step ${
                        currentStep === index + 1 ? "active" : ""
                      }`}
                    >
                      {index + 1}

                      
                    </div>
                    <h4 className="ms-2">
                        {question.content}
                      </h4>
                </div>
                     
                      {question?.Choices?.map((choice) => (
                        <div key={choice?.id} className="mb-2 border rounded p-2 d-flex align-items-center ">
                          <input
                            type="radio"
                            className="form-radio"
                            id={choice?.id}
                            name={`question_${question.id}`}
                            value={choice.id}
                            onChange={() =>
                              handleAnswerSelect(question?.id, choice?.id)
                            }
                          />
                          <label className="d-inline-block ms-1 text-muted w-75" htmlFor={choice?.id}>{choice?.content}</label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="quiz-navigation">
                  <button onClick={handlePrev} disabled={currentStep === 1}>
                    السابق
                  </button>
                  {currentStep === quiz?.Questions?.length ? (
                    <button onClick={() => handleSubmitQuiz(quiz.id)}>
                      ارسال
                    </button>
                  ) : (
                    <button onClick={handleNext}>التالي</button>
                  )}
                </div>
              </div>

              {/* 
            <div key={quiz?.id}>
         <h3>{quiz?.title}</h3>
         {quiz?.Questions?.map(question => (
            <div key={question?.id}>
              <p>{question?.content}</p>
              {question?.Choices?.map(choice => (
                <div key={choice?.id}>
                  <input
                    type="radio"
                    id={choice?.id}
                    name={`question_${question.id}`}
                    value={choice.id}
                    onChange={() => handleAnswerSelect(question?.id, choice?.id)}
                  />
                  <label htmlFor={choice?.id}>{choice?.content}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={() => handleSubmitQuiz(quiz.id)}>Submit Quiz</button> */}
            </>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default CourseDetails;
