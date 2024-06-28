import React ,{useEffect , useState} from 'react'
import './Info.css'
import 'animate.css/animate.css';

function Info({infoScroll}) {
    // const [infoScroll , setInfoScroll] = useState(false)
  // useEffect(() => {
    

  //  const handleScroll = () => {
  //    const isInfoScrolled = window.scrollY > 300;
  //    setInfoScroll(isInfoScrolled);
  //  };

  //  window.addEventListener('scroll', handleScroll);

  //  return () => {
  //    window.removeEventListener('scroll', handleScroll);
  //  };
//  }, []);
  return (
    <div>
      <section className=" py-5" id="About">
        <div className="container py-4">
          <div className="row align-items-center">

            <div className={`col-lg-6 animate__animated  animate__delay-1s animate__slower ${infoScroll ? "animate__backInRight" : ""}`} id="about_info">
              <h2 > الموقع الرسمي لمستر<span className="fw-bold name" >   جمال عبدالناصر </span>  </h2>
              <div className="hr-card text-center my-2"></div>


              <p className="text-muted mt-3 fs-5 ">
                بخبرة تعدي الـ ٢٠ سنة في تدريس مادة الكيمياء للثانوية العامة والازهرية قدرنا نخرج آلاف الطلاب
                بأعلى درجات في المادة, بالإضافة لأوائل  لكل سنة.
                أهم حاجة عندنا; إننا نفهمك المادةبالشرح المبسط, و نربطلك جزئيات المنهج ببعض,
                و نحل معاك أكبر قدر من الأسئلة , مع متابعة دورية اسبوعية على كل محاضرة
                توصلك لبر الآمان و نضمنلك الـ ٦٠  درجة في المادة زي كل طلابنا في كل سنة.
                و خليك عارف إنك أول اهتمامتنا جوا و برا الدراسة عشان كدة هنسهل عليك التواصل معانا,
                في حين قابلتك أي مشكلة "اتصل بينا أو ابعتلنا واتساب علي ٠١٢٧٧٦١٤٠٥٠  "
              </p>




            </div>
            <div className="col-lg-6">
              <img src="./imgs/about2.jpeg" id="about_img" alt="person wearing hat" className={`w-100 animate__animated  animate__delay-1s animate__slower  ${infoScroll ? "animate__backInLeft" : ""}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info
