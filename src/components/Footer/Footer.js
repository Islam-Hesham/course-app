import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="">
        <div className="container-fluid py-4 ">
          <div className="row pt-4">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center col-sm-12 ">
              <h5 className="fh-footer text-warning">
                عن البروفسير في الكيمياء
              </h5>
              <p className="mt-3">
                موقع البروفسير في الكيمياء منصة أونلاين عربية متخصصة بالكيمياء.
                نعمل على نشر كل جديد في مختلف المراحل
              </p>
            </div>
            <div className="social-footer  mt-2 col-md-12 text-center mb-sm-2  col-sm-12 ">
              <a
                href="https://www.instagram.com/gamalnasssr23?igsh=cTZnaG1vcDZvdzN2"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noreferrer"

              >
                <i class="fa-brands  fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100064579931454&mibextid=ZbWKwL"
                className="text-white text-decoration-none "
                target="_blank"
                rel="noreferrer"

              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://wa.me/201277614050"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noreferrer"

              >
                                <i className="fa-brands fa-whatsapp"></i>

              </a>
            </div>
          </div>
         
        </div>
        <section className="end py-2">
        <div className="container-fluid">
          <div className="row mt-1">
         
            <div className=" col-md-12  text-center  col-sm-12">
              <p className="font-w-bold text-white px-2 mb-0 ">
                تم التطوير بواسطة
                <span className="ps-2">
                  <a
                    href="https://www.facebook.com/islam.hesham3?mibextid=ZbWKwL"
                    className="text-decoration-none  text-warning "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Islam Hesham
                  </a>
                </span>
                <span className="copy d-inline-block  px-2 my-1">
                  جميع الحقوق محفوظة &copy; 2024
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      </footer>
   
    </div>
  );
}

export default Footer;
