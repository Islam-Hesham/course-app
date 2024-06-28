import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
          <div className="section5 overflow-hidden  py-5" id="events">
              <div className="container ">

                  <div className="row py-5">
                      <div className="section5-item col-md-6 col-sm-12">
                          <h1 className="my-2">تواصل معنا</h1>
                          <div className="hr-card ms-5 mb-5"></div>
                          <p className="mt-3 fs-5">
                              <span> موقع   </span>
                              <span className="name ">البروفسير  في الكيمياء </span>

                              منصة أونلاين عربية متخصصة بالكيمياء. نعمل على نشر كل جديد في مختلف
                              المراحل
                          </p>


                          <h5 className="mt-5">للاتصال:</h5>
                          <p className="spacial mt-3">
                              <i className="fas fa-location-dot pe-1 text-warning"></i> الشرقيه / الزقازيق
                          </p>
                          <p> <i className="fas fa-phone pe-1 text-warning"></i>01277614050</p>
                          <p> <i className="fas fa-envelope pe-1 text-warning"></i>gamalnasssr23@gmail.com</p>



                      </div>
                      <div className="section5-item col-md-6 col-sm-12">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.0599307371026!2d31.540886460295322!3d30.604072774752026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f7a1e848ac8b%3A0xa82abe670863b58d!2z2YfYsdmK2Ycg2LHYstmG2Yc!5e0!3m2!1sar!2seg!4v1706649380501!5m2!1sar!2seg"
                              width="600" height="450" style={{ border: 0 }} loading="lazy"
                          ></iframe>
                      </div>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Contact
