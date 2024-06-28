// Footer.js
import React from 'react';
import './Head.css';
import 'animate.css/animate.css';
import Swal from 'sweetalert2';


const Head = () => {

    const handleScroll = () => {
        const lesson = document.getElementById('courses')
     
        if (lesson) {
          lesson.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const showAlert = () => {
        Swal.fire({
            title: 'طريقة الاشتراك',
            text: `   دوس على "أعمل حساب جديد !" لو لسة معملتش حساب على المنصة و بتملى البيانات كويس و بعدين بتدوس علي إنشاء الحساب
        هيقولك تم إنشاء حسابك بنجاح بتروح للصفحة الرئيسية
        هتنزل تحت هتختار الكورس اللي انت عاوز تشترك فيه
        
        بعد مـ تدفع علي اورنج كاش هتبعتلنا صورة بايصال الدفع و معاها الايميل اللي سجلت بيه و بعدها هنفعلك الكورس و هتلاقيه ف قايمة "كورساتي "
        
        لو قابلتك اي مشكلة كلمنا على الواتساب  و هنحللك مشكلتك في اسرع وقت ❤️
          `,
            icon: 'info',
            className: 'join',
        
            confirmButtonText: 'حسنا',
          
            timer: 15000000000000,
            showCloseButton: true,
          });
      };

  return (
   <>
    
          <header className="  text-center" id="home">

              <div className="container pt-5">
                  <div className="row">

                      <div className="head-img animate__animated animate__bounceIn animate__delay-1s animate__slower  col-md-4 col-sm-12 ">
                      <img src="./imgs/head.jpeg" alt="" width="100%" />
                  </div>
                      <div className="head-item  mt-5  col-md-8 col-sm-12">
                      <h2 className="">منصة متكاملة
                          في الكيمياء</h2>
                      <p className="job-title  fw-semibold position-relative">

                      </p>
                      <h5 className="text-muted pt-2 ">
                          موقع البروفسير في الكيمياء منصة أونلاين عربية متخصصة بالكيمياء لجميع المراحل الثانويه العامةو الأزهرية
                      </h5>
                      <button onClick={showAlert} className=" btn btn-outline-primary btn-raduis ms-1 my-3"
                          aria-pressed="true">
                          اشترك الان</button>

                  </div>


              </div>
              </div>


              <a href='#courses' onClick={handleScroll}><i className="fa-solid fa-chevron-down"></i></a>

          </header>
   
   </>
  );
}

export default Head;
