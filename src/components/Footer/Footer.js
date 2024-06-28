import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
          <footer className="py-5">

              <div className="container-fluid">
                  <div className="row ">
                      <div className="col-md-12 d-flex flex-column justify-content-center align-items-center col-sm-12 ">
                          <h5 className="fh-footer text-warning">عن البروفسير في الكيمياء</h5>
                          <p className="mt-3">موقع البروفسير في الكيمياء منصة أونلاين عربية متخصصة بالكيمياء.
                              نعمل على نشر كل جديد في مختلف المراحل
                          </p>


                      </div>

                  </div>


              </div>


          </footer>
          <section className="end py-2">
              <div className="container">
                  <div className="row ">

                      <div className="social-footer col-md-6  col-sm-12 ">
                              <a href="https://www.instagram.com/gamalnasssr23?igsh=cTZnaG1vcDZvdzN2" className="text-white text-decoration-none" target="_blank">
                                  <i class="fa-brands fa-instagram"></i></a>



                              <a href="https://www.facebook.com/profile.php?id=100064579931454&mibextid=ZbWKwL" className="text-white text-decoration-none" target="_blank">
                                  <i className="fab fa-facebook-f"></i></a>


                              <a href="https://wa.me/201277614050" className="text-white text-decoration-none" target="_blank">
                                  <i className="fab fa-whatsapp"></i></a>







                          </div>
                      <div className=" col-md-6  col-sm-12  d-flex">
                              <p className="copy  px-2 my-1">جميع الحقوق محفوظة &copy; 2024
                              </p>
                          <p className="font-w-bold text-white px-2  ">Developed By
                              
                              <span  className='pe-1'><a href="https://www.facebook.com/islam.hesham3?mibextid=ZbWKwL" className='text-decoration-none  text-warning ' target="_blank" >Islam Hesham</a></span>

                              
                              </p>
                            
                      </div>

                  </div>
              </div>

          </section>
    </div>
  )
}

export default Footer
