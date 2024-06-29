import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import useCookies from "../../cookies";
import axios from "axios";
import { toast } from "react-toastify";
import './Navbar.css';

const NavbarComponent = ({ scroll }) => {
  const navigate = useNavigate();
  const { cookies, setCookie, getCookie, removeCookie } = useCookies();
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getCookie("token");

    if (token && token !== "undefined") {
      setAuth(true);
      setUser(JSON.parse(getCookie("user")));
    } else {
      setAuth(false);
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout", {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });

      removeCookie("token");
      removeCookie("user");
      navigate("/login");
    } catch (err) {
      toast.error("حدثت مشكلة ");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      fixed="top"
      id="naVBar"
      className={`${scroll ? 'scrolled' : ''}`}
    >
      <Container fluid>
       <Navbar.Brand as={Link} to="/" >
  <img src="/imgs/333.jpeg" alt="atom" width="90" height="90" style={{ marginRight: '10px' }} />
  <span className="text-nav">البروفسير في الكيمياء</span>
</Navbar.Brand>



        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          {/* <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold navbar-link p-3">
              الرئيسية
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("courses")} className="fw-semibold p-3">
              محاضرات
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("About")} className="fw-semibold p-3">
              نبذه عن
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("events")} className="fw-semibold p-3">
              تواصل معانا
            </Nav.Link>
          </Nav> */}
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fw-semibold p-3 position-relative overflow-hidden"
                aria-current="page"
                to="/"
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold p-3 position-relative overflow-hidden"
                onClick={() => scrollToSection("Blog")}
                // to="#blog"
              >
                محاضرات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold p-3 position-relative overflow-hidden" onClick={() => scrollToSection("About")}>نبذه عن</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold p-3 position-relative overflow-hidden"
                onClick={() => scrollToSection("events")}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
          <Nav>
            {auth ? (
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {user?.firstName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/mycourses">كورساتي</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>خروج</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Link to="/login" className="btn btn-raduis btn-blue mx-2 mt-1 btn-warning border-0" role="button" aria-pressed="true">
                  ادخل حسابك
                </Link>
                <Link to="/register" className="btn btn-raduis btn-yellow mt-1 mx-2 btn-primary border-0 " role="button" aria-pressed="true">
                  اعمل حساب جديد
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
