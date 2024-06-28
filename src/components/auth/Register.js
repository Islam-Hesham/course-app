import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    parentPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://lms.gamal-abdelnasser.com/sign-up', formData);
      console.log('Registration successful:', response.data);
      setFormData({
        firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    parentPhone: ''


      });
      // localStorage.setItem('token', token);
      // setIsRegistered(true);
      toast.success('تم انشاء الحساب بنجاح ')
      navigate('/login');

      // Swal.fire({
      //   // title: 'طريقة الاشتراك',
      //   text: `  تم انشاء الحساب بنجاح 
      // `,
      //   icon: 'success',
      //   className: 'join',
    
      //   confirmButtonText: 'حسنا',
      
      //   timer: 15000000000000,
      //   showCloseButton: true,
      // });

      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error('Registration failed:', error.response.data.status_code);
      if(error.response.data.status_code === 400){
        toast.error(error.response.data.message);
      }else{
        toast.error("حدثت مشكلة من فضلك حاول مرة أخري");
      }
     
      // Handle error (e.g., display an error message to the user)
    }
  };

  // if (isRegistered) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div className="rtl">
      <div className="body-box w-100 h-100">
        <div className="container py-5 d-flex" id="registration-form">
          <div className="frm">
            <h2 className="my-3">أنشىء حسابك الآن :</h2>
           
              <div className="login-inputs d-flex">
                <div className="form-group w-100 me-1">
                  <label for="username"> الاسم الأول:</label>
                  <input type="text"  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange} className="form-control" id="username" />
                </div>
                <div className="form-group w-100 me-1">
                  <label for="username2"> الاسم الثاني:</label>
                  <input type="text"  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange} className="form-control" id="username2" />
                </div>
              </div>

              <div className="form-group">
                <label for="email">البريد الالكتروني:</label>
                <input type="email"  name="email"
                  value={formData.email}
                  onChange={handleChange} className="form-control" id="email" />
              </div>
              <div className="d-flex">
                <div className="form-group w-100">
                  <label for="pwd">کلمه المرور:</label>
                  <input type="password"  name="password"
                  value={formData.password}
                  onChange={handleChange} className="form-control" id="pwd" />
                </div>
                
              </div>
              <div className="d-flex">
                <div className="form-group">
                  <label for="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
                <div className="form-group">
                  <label for="phone"> رقم هاتف ولي الامر</label>
                  <input
                    type="tel"
                    id="phone"
                    name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                    className="form-control"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
              </div>

              <div className="form-group">
                <button onClick={handleSubmit} className="btn card-btn m-auto">
                  انشئ حساب
                </button>
              </div>
              <div className="flex flex-wrap flex-row ">
                <span>يوجد لديك حساب بالفعل؟</span>
                <Link to="/login">
                  <span>ادخل إلى حسابك الآن !</span>
                </Link>
              </div>
            
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
